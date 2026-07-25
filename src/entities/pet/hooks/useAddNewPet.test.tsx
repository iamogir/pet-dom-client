// @vitest-environment jsdom

import type { ReactNode } from "react";
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { addNewPet, petQueryKeys } from "entities/pet/api";
import type { IPet, IPets } from "entities/pet/model";
import { useAddNewPet } from "./useAddNewPet";

vi.mock("entities/pet/api", async () => {
    const actual = await vi.importActual<
        typeof import("entities/pet/api")
    >("entities/pet/api");

    return {
        ...actual,
        addNewPet: vi.fn(),
    };
});

afterEach(() => {
    vi.clearAllMocks();
    vi.unstubAllGlobals();
});

describe("useAddNewPet", () => {
    it("adds a temporary pet to cache", async () => {
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

        queryClient.setQueryData<IPets>(petQueryKeys.all, {
            data: [mika],
            meta: {
                total: 1,
            },
        });

        vi.stubGlobal("crypto", {
            randomUUID: vi.fn().mockReturnValue(
                "00000000-0000-4000-8000-000000000002"
            ),
        });

        vi.mocked(addNewPet).mockResolvedValue({
            id: "server-pet-2",
            name: "Luna",
            species: "cat",
        });

        const wrapper = ({ children }: { children: ReactNode }) => (
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        );

        const { result } = renderHook(() => useAddNewPet(), {
            wrapper,
        });

        await act(async () => {
            await result.current.mutateAsync({
                name: "Luna",
                species: "cat",
            });
        });

        expect(queryClient.getQueryData(petQueryKeys.all)).toEqual({
            data: [
                mika,
                {
                    id: "00000000-0000-4000-8000-000000000002",
                    name: "Luna",
                    species: "cat",
                },
            ],
            meta: {
                total: 2,
            },
        });

        queryClient.clear();
    });
});