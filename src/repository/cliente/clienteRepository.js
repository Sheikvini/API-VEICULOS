import conexao from "../conection";

export async function listarClientes {
    let sql = 'select * from tb_clientes';

    let resp = await conexao.query(sql);
    let dados = resp[0];

    return dados;
}

export async function inserir(cliente) {
    let sql = 'insert into tb_clientes (nm_nome, ds_email, ds_telefone, ds_cpf, ds_cnh) values (?,?)';
    let resp = await conexao.
}
