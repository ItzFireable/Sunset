"use client";

import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import poster from "@/lib/services/poster";
import { useUserSelf } from "../user/useUser";
import { PinResponse } from "@/lib/types/api";

export function usePinScore(scoreId: number) {
  const { data } = useUserSelf();

  return useSWR<PinResponse>(
    data ? `score/${scoreId}/pin` : null
  );
}

export function useUpdatePinScore(scoreId: number) {
  const { data } = useUserSelf();

  return useSWRMutation<PinResponse>(
    data ? `score/${scoreId}/pin` : null,
    () => updatePinScore(scoreId)
  );
}

const updatePinScore = async (scoreId: number): Promise<PinResponse> => {
  return await poster(`score/${scoreId}/pin`, {});
};
