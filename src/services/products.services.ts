import type { UnifiedProductType } from "@use-stall/types";

const list = async (props: {
  connector_config: Record<string, any>;
  query?: string;
}): Promise<UnifiedProductType[]> => {
  try {
    console.log("running google sheets adapter products list");
    return [];
  } catch (error) {
    throw error;
  }
};

const retrieve = async (props: {
  connector_config: Record<string, any>;
  id: string;
}): Promise<UnifiedProductType> => {
  try {
    return {} as UnifiedProductType;
  } catch (error) {
    throw error;
  }
};

const create = async (props: {
  connector_config: Record<string, any>;
  data: UnifiedProductType;
}): Promise<UnifiedProductType> => {
  try {
    return {} as UnifiedProductType;
  } catch (error) {
    throw error;
  }
};

const update = async (props: {
  connector_config: Record<string, any>;
  id: string;
  data: Partial<UnifiedProductType>;
}): Promise<UnifiedProductType> => {
  try {
    return {} as UnifiedProductType;
  } catch (error) {
    throw error;
  }
};

const _delete = async (props: {
  connector_config: Record<string, any>;
  id: string;
}): Promise<void> => {
  try {
    return;
  } catch (error) {
    throw error;
  }
};

const bulk_create = async (props: {
  connector_config: Record<string, any>;
  data: UnifiedProductType[];
}): Promise<UnifiedProductType[]> => {
  try {
    return [];
  } catch (error) {
    throw error;
  }
};

const bulk_update = async (props: {
  connector_config: Record<string, any>;
  data: Array<{ id: string; data: Partial<UnifiedProductType> }>;
}): Promise<UnifiedProductType[]> => {
  try {
    return [];
  } catch (error) {
    throw error;
  }
};

const bulk_delete = async (props: {
  connector_config: Record<string, any>;
  ids: string[];
}): Promise<void> => {
  try {
    return;
  } catch (error) {
    throw error;
  }
};

export const products = {
  list,
  retrieve,
  create,
  update,
  delete: _delete,
  bulk_create,
  bulk_update,
  bulk_delete,
};
