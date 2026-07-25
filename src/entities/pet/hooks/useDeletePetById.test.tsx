// @vitest-environment jsdom

import type { ReactNode } from "react";
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { deletePetById, petQueryKeys } from "entities/pet/api";
import type { IPet, IPets } from "entities/pet/model";
import { useDeletePetById } from "./useDeletePetById";

vi.mock("entities/pet/api", async () => {
    const actual = await vi.importActual<
        typeof import("entities/pet/api")
    >("entities/pet/api");

    return {
        ...actual,
        deletePetById: vi.fn(),
    };
});

beforeEach(() => {
    vi.clearAllMocks();
});

describe("useDeletePetById", () => {
    it("removes the deleted pet from cache", async () => {
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

        vi.mocked(deletePetById).mockResolvedValue(mika);

        const wrapper = ({ children }: { children: ReactNode }) => (
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        );

        const { result } = renderHook(() => useDeletePetById(), {
            wrapper,
        });

        await act(async () => {
            await result.current.mutateAsync("pet-1");
        });

        expect(queryClient.getQueryData(petQueryKeys.all)).toEqual({
            data: [luna],
            meta: {
                total: 1,
            },
        });

        queryClient.clear();
    });
});