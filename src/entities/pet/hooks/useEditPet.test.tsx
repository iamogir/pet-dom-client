// @vitest-environment jsdom

import type { ReactNode } from "react";
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { editPet, petQueryKeys } from "entities/pet/api";
import type { IPet, IPets } from "entities/pet/model";
import { useEditPet } from "./useEditPet";

vi.mock("entities/pet/api", async () => {
    const actual = await vi.importActual<
        typeof import("entities/pet/api")
    >("entities/pet/api");

    return {
        ...actual,
        editPet: vi.fn(),
    };
});

afterEach(() => {
    vi.clearAllMocks();
});

describe("useEditPet", () => {
    it("updates pet in list and single-pet cache", async () => {
        const queryClient = new QueryClient({
            defaultOptions: {
                queries: {
                    retry: false,
                },
                mutations: {
                    retry: false,
                },
            },
        });

        const mika: IPet = {
            id: "pet-1",
            name: "Mika",
            species: "dog",
        };

        const luna: IPet = {
            id: "pet-2",
            name: "Luna",
            species: "cat",
        };

        queryClient.setQueryData<IPets>(petQueryKeys.all, {
            data: [mika, luna],
            meta: {
                total: 2,
            },
        });

        const updatedMika: IPet = {
            id: "pet-1",
            name: "Mika Updated",
            species: "dog",
            birthDate: new Date("2022-05-10"),
        };

        vi.mocked(editPet).mockResolvedValue(updatedMika);

        const wrapper = ({ children }: { children: ReactNode }) => (
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        );

        const { result } = renderHook(() => useEditPet(), {
            wrapper,
        });

        await act(async () => {
            await result.current.mutateAsync({
                id: "pet-1",
                name: "Mika Updated",
                species: "dog",
                birthDate: "2022-05-10",
            });
        });

        expect(queryClient.getQueryData(petQueryKeys.all)).toEqual({
            data: [updatedMika, luna],
            meta: {
                total: 2,
            },
        });

        expect(
            queryClient.getQueryData(
                petQueryKeys.single("pet-1")
            )
        ).toEqual(updatedMika);

        queryClient.clear();
    });

    it("restores previous cache when pet editing fails", async () => {
        const queryClient = new QueryClient({
            defaultOptions: {
                queries: {
                    retry: false,
                },
                mutations: {
                    retry: false,
                },
            },
        });

        const mika: IPet = {
            id: "pet-1",
            name: "Mika",
            species: "dog",
        };

        const luna: IPet = {
            id: "pet-2",
            name: "Luna",
            species: "cat",
        };

        const previousPets: IPets = {
            data: [mika, luna],
            meta: {
                total: 2,
            },
        };

        queryClient.setQueryData(petQueryKeys.all, previousPets);

        vi.mocked(editPet).mockRejectedValue(
            new Error("Request failed")
        );

        const wrapper = ({ children }: { children: ReactNode }) => (
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        );

        const { result } = renderHook(() => useEditPet(), {
            wrapper,
        });

        await act(async () => {
            await expect(
                result.current.mutateAsync({
                    id: "pet-1",
                    name: "Wrong temporary name",
                    species: "dog",
                })
            ).rejects.toThrow("Request failed");
        });

        expect(queryClient.getQueryData(petQueryKeys.all)).toEqual(
            previousPets
        );

        queryClient.clear();
    });
});