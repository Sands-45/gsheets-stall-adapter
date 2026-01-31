import { BASE_URL } from "@/constants/default";
import { get_error_message } from "@/lib/utils";
import type { ConnectorConfigType } from "@/types/auth";
import type { UnifiedTaxClass } from "@use-stall/types";

const list = async (props: {
  connector_config: ConnectorConfigType;
  query?: string;
}): Promise<UnifiedTaxClass[]> => {
  try {
    const { connector_config, query } = props;
    const endpoint = `${BASE_URL}/taxes/classes?${query}`;

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
}): Promise<UnifiedTaxClass> => {
  try {
    const { connector_config, id } = props;
    const endpoint = `${BASE_URL}/taxes/classes?id=${id}`;

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
    return data as UnifiedTaxClass;
  } catch (error) {
    throw error;
  }
};

const create = async (props: {
  connector_config: ConnectorConfigType;
  data: UnifiedTaxClass;
}): Promise<UnifiedTaxClass> => {
  try {
    const { connector_config, data: tax_class } = props;
    const endpoint = `${BASE_URL}/taxes/class`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${connector_config.auth_token}`,
        spreadsheet_id: connector_config.api_key_value,
        refresh_token: connector_config.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tax_class),
    });

    const data = (await res.json()) as unknown as any;

    if (!res.ok) {
      const message = data?.error || "We ran into an error !";
      throw new Error(message);
    }

    return data as UnifiedTaxClass;
  } catch (error) {
    throw error;
  }
};

const update = async (props: {
  connector_config: ConnectorConfigType;
  id: string;
  data: Partial<UnifiedTaxClass>;
}): Promise<UnifiedTaxClass> => {
  try {
    const { connector_config, data: tax_class, id } = props;
    const endpoint = `${BASE_URL}/taxes/class/${id}`;

    const res = await fetch(endpoint, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${connector_config.auth_token}`,
        spreadsheet_id: connector_config.api_key_value,
        refresh_token: connector_config.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tax_class),
    });

    const data = (await res.json()) as unknown as any;

    if (!res.ok) {
      const message = data?.error || "We ran into an error !";
      throw new Error(message);
    }

    return data as UnifiedTaxClass;
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
    const endpoint = `${BASE_URL}/taxes/class/${id}`;

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
      const message = data?.error || "We ran into an error !";
      throw new Error(message);
    }

    return;
  } catch (error) {
    throw error;
  }
};

const bulk_create = async (props: {
  connector_config: ConnectorConfigType;
  data: UnifiedTaxClass[];
}): Promise<any> => {
  try {
    const { connector_config, data: tax_classes } = props;
    const endpoint = `${BASE_URL}/taxes/classes/bulk`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${connector_config.auth_token}`,
        spreadsheet_id: connector_config.api_key_value,
        refresh_token: connector_config.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({data:tax_classes}),
    });

    const data = (await res.json()) as unknown as any;

    if (!res.ok || !data.created) {
      const message = get_error_message(data);
      throw new Error(message);
    }

    return data.created as UnifiedTaxClass[];
  } catch (error) {
    throw error;
  }
};

const bulk_update = async (props: {
  connector_config: ConnectorConfigType;
  data: Array<{ id: string; updates: Partial<UnifiedTaxClass> }>;
}): Promise<UnifiedTaxClass[]> => {
  try {
    const { connector_config, data: updates } = props;
    const endpoint = `${BASE_URL}/taxes/classes/bulk`;

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

    return data as UnifiedTaxClass[];
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
    const endpoint = `${BASE_URL}/taxes/classes/bulk`;

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
      const message = data?.error || "We ran into an error !";
      throw new Error(message);
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export const tax_classes = {
  list,
  retrieve,
  create,
  update,
  delete: _delete,
  bulk_create,
  bulk_update,
  bulk_delete,
};
