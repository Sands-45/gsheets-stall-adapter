import { BASE_URL } from "@/constants/default";
import { get_error_message } from "@/lib/utils";
import type { ConnectorConfigType } from "@/types/auth";
import type { UnifiedTaxRate } from "@use-stall/types";

const list = async (props: {
  connector_config: ConnectorConfigType;
  query?: string;
}): Promise<UnifiedTaxRate[]> => {
  try {
    const { connector_config, query } = props;
    const endpoint = `${BASE_URL}/taxes/rates?${query}`;

    const res = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${connector_config.auth_token}`,
        spreadsheet_id: connector_config.api_key_value,
        refresh_token: connector_config.token,
      },
    });

    const data = (await res.json()) as unknown as any;

    if (!res.ok) {
      const message = get_error_message(data);
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
}): Promise<UnifiedTaxRate> => {
  try {
    const { connector_config, id } = props;
    const endpoint = `${BASE_URL}/taxes/rates?id=${id}`;

    const res = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${connector_config.auth_token}`,
        spreadsheet_id: connector_config.api_key_value,
        refresh_token: connector_config.token,
      },
    });

    const data = (await res.json()) as unknown as any;

    if (!res.ok) {
      const message = get_error_message(data);
      throw new Error(message);
    }
    return data as UnifiedTaxRate;
  } catch (error) {
    throw error;
  }
};

const create = async (props: {
  connector_config: ConnectorConfigType;
  data: UnifiedTaxRate;
}): Promise<UnifiedTaxRate> => {
  try {
    const { connector_config, data: rate } = props;
    const endpoint = `${BASE_URL}/taxes/rates`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${connector_config.auth_token}`,
        spreadsheet_id: connector_config.api_key_value,
        refresh_token: connector_config.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rate),
    });

    const data = (await res.json()) as unknown as any;

    if (!res.ok) {
      const message = get_error_message(data);
      throw new Error(message);
    }

    return data as UnifiedTaxRate;
  } catch (error) {
    throw error;
  }
};

const update = async (props: {
  connector_config: ConnectorConfigType;
  id: string;
  data: Partial<UnifiedTaxRate>;
}): Promise<UnifiedTaxRate> => {
  try {
    const { connector_config, data: rate, id } = props;
    const endpoint = `${BASE_URL}/taxes/rates/${id}`;

    const res = await fetch(endpoint, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${connector_config.auth_token}`,
        spreadsheet_id: connector_config.api_key_value,
        refresh_token: connector_config.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rate),
    });

    const data = (await res.json()) as unknown as any;

    if (!res.ok) {
      const message = get_error_message(data);
      throw new Error(message);
    }

    return data as UnifiedTaxRate;
  } catch (error) {
    throw error;
  }
};

const _delete = async (props: {
  connector_config: ConnectorConfigType;
  id: string;
}): Promise<void> => {
  try {
    const { connector_config, id } = props;
    const endpoint = `${BASE_URL}/taxes/rates/${id}`;

    const res = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${connector_config.auth_token}`,
        spreadsheet_id: connector_config.api_key_value,
        refresh_token: connector_config.token,
      },
    });

    const data = (await res.json()) as unknown as any;

    if (!res.ok) {
      const message = get_error_message(data);
      throw new Error(message);
    }

    return;
  } catch (error) {
    throw error;
  }
};

const bulk_create = async (props: {
  connector_config: ConnectorConfigType;
  data: UnifiedTaxRate[];
}): Promise<any> => {
  try {
    const { connector_config, data: rates } = props;
    const endpoint = `${BASE_URL}/taxes/rates/bulk`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${connector_config.auth_token}`,
        spreadsheet_id: connector_config.api_key_value,
        refresh_token: connector_config.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: rates }),
    });

    const data = (await res.json()) as unknown as any;

    if (!res.ok || !data.created) {
      const message = get_error_message(data);
      throw new Error(message);
    }

    return data.created;
  } catch (error) {
    throw error;
  }
};

const bulk_update = async (props: {
  connector_config: ConnectorConfigType;
  data: Array<{ id: string; updates: Partial<UnifiedTaxRate> }>;
}): Promise<UnifiedTaxRate[]> => {
  try {
    const { connector_config, data: updates } = props;
    const endpoint = `${BASE_URL}/taxes/rates/bulk`;

    const res = await fetch(endpoint, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${connector_config.auth_token}`,
        spreadsheet_id: connector_config.api_key_value,
        refresh_token: connector_config.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({data:updates}),
    });

    const data = (await res.json()) as unknown as any;

    if (!res.ok) {
      const message = get_error_message(data);
      throw new Error(message);
    }

    return data as UnifiedTaxRate[];
  } catch (error) {
    throw error;
  }
};

const bulk_delete = async (props: {
  connector_config: ConnectorConfigType;
  ids: string[];
}): Promise<any> => {
  try {
    const { connector_config, ids } = props;
    const endpoint = `${BASE_URL}/taxes/rates/bulk`;

    const res = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${connector_config.auth_token}`,
        spreadsheet_id: connector_config.api_key_value,
        refresh_token: connector_config.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids }),
    });

    const data = (await res.json()) as unknown as any;

    if (!res.ok) {
      const message = get_error_message(data);
      throw new Error(message);
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export const tax_rates = {
  list,
  retrieve,
  create,
  update,
  delete: _delete,
  bulk_create,
  bulk_update,
  bulk_delete,
};
