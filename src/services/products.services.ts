import { BASE_URL } from "@/constants/default";
import { get_error_message } from "@/lib/utils";
import type { ConnectorConfigType } from "@/types/auth";
import type { UnifiedProductType } from "@use-stall/types";

const list = async (props: {
  connector_config: ConnectorConfigType;
  query?: string;
}): Promise<UnifiedProductType[]> => {
  try {
    const { connector_config, query } = props;
    const endpoint = `${BASE_URL}/products/list`;

    const res = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${connector_config.auth_token}`,
        spreadsheet_id: connector_config.api_key_value,
        refresh_token: connector_config.token,
      },
    });

    const data = (await res.json()) as unknown as any;

    if (!res.ok) {
      const message = data?.error || "We ran into an error !";
      throw new Error(message);
    }

    return data;
  } catch (error: unknown) {
    const message = get_error_message(error);
    throw new Error(message);
  }
};

const retrieve = async (props: {
  connector_config: ConnectorConfigType;
  id: string;
}): Promise<UnifiedProductType> => {
  try {
    return {} as UnifiedProductType;
  } catch (error) {
    throw error;
  }
};

const create = async (props: {
  connector_config: ConnectorConfigType;
  data: UnifiedProductType;
}): Promise<UnifiedProductType> => {
  try {
    return {} as UnifiedProductType;
  } catch (error) {
    throw error;
  }
};

const update = async (props: {
  connector_config: ConnectorConfigType;
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
  connector_config: ConnectorConfigType;
  id: string;
}): Promise<void> => {
  try {
    return;
  } catch (error) {
    throw error;
  }
};

const bulk_create = async (props: {
  connector_config: ConnectorConfigType;
  data: UnifiedProductType[];
}): Promise<UnifiedProductType[]> => {
  try {
    return [];
  } catch (error) {
    throw error;
  }
};

const bulk_update = async (props: {
  connector_config: ConnectorConfigType;
  data: Array<{ id: string; data: Partial<UnifiedProductType> }>;
}): Promise<UnifiedProductType[]> => {
  try {
    return [];
  } catch (error) {
    throw error;
  }
};

const bulk_delete = async (props: {
  connector_config: ConnectorConfigType;
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
