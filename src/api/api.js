// documentação: https://api-bilhete-dot-api-samples-423102.uc.r.appspot.com

const apiURL =
  "https://api-bilhete-dot-api-samples-423102.uc.r.appspot.com/api/bilhetes";

export async function findAll() {
  const requestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 12120881",
    },
  };

  const httpResponse = await fetch(apiURL, requestInit);

  if (httpResponse.ok) {
    return await httpResponse.json();
  } else {
    throw new Error(
      "Não foi possível obter os contatos. Favor entre em contato com o suporte TI"
    );
  }
}

// promiseAll resolve todas as requisições ao mesmo tempo, processamento paralelo
// funções async =
// await = aguardar

export async function deleteById(id) {
  const requestInit = {
    method: "DELETE",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 12120881",
    },
  };

  const httpResponse = await fetch(apiURL + "/" + id, requestInit);

  if (httpResponse.ok) {
    return await httpResponse.json();
  } else {
    throw new Error(
      "Não foi possivel excluir o contato. Favor entre em contato com o suporte."
    );
  }
}

export async function save(
  numero,
  assento,
  dataPartida,
  dataChegada,
  tipo,
  valor
) {
  const requestInit = {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 12120881",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      numero,
      assento,
      dataPartida,
      dataChegada,
      tipo,
      valor,
    }),
  };

  const httpResponse = await fetch(apiURL, requestInit);

  if (httpResponse.ok) {
    return await httpResponse.json();
  } else {
    console.log(await httpResponse.text());
    throw new Error(
      "Não foi possivel criar o contato. Favor entre em contato com o suporte."
    );
  }
}
