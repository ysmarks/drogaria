package br.com.ys.drogaria.dao;

import org.junit.Test;

import br.com.ys.drogaria.domain.Cidade;
import br.com.ys.drogaria.domain.Pessoa;

public class PessoaDAOTest {

	@Test
	public void salvar() {
		Pessoa pessoa = new Pessoa();
		Cidade cidade = new Cidade();
		cidade.setCodigo(2l);
		pessoa.setNome("Bebeto");
		pessoa.setCpf("1246378624");
		pessoa.setRg("123456789");
		pessoa.setEmail("bebeto@email.com");
		pessoa.setTelefone("98765789");
		pessoa.setCelular("98342111");
		pessoa.setRua("Rua Barbosa");
		pessoa.setNumero(new Short("34"));
		pessoa.setBairro("Praça Joaquim");
		pessoa.setCep("2455562");
		pessoa.setComplemento("Apartamento");
		pessoa.setCidade(cidade);
		PessoaDAO dao = new PessoaDAO();
		dao.salvar(pessoa);
		
		System.out.println(pessoa.getNome());
	}

}
