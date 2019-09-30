package br.com.ys.drogaria.dao;

import java.util.Date;

import org.junit.Test;

import br.com.ys.drogaria.domain.Cliente;
import br.com.ys.drogaria.domain.Pessoa;

public class ClienteDAOTest {

	@Test
	public void salvar() {
		Cliente cliente = new Cliente();
		Pessoa pessoa = new Pessoa();
		ClienteDAO dao = new ClienteDAO();
		pessoa.setCodigo(2l);
		cliente.setDataCadastro(new Date());
		cliente.setLiberado(true);
		cliente.setPessoa(pessoa);
		dao.salvar(cliente);
		System.out.println(cliente.getDataCadastro());
		System.out.println(cliente.getPessoa().getNome());
	}

}
