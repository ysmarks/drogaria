package br.com.ys.drogaria.dao;

import java.util.List;

import org.junit.Ignore;
import org.junit.Test;

import br.com.ys.drogaria.domain.Cidade;
import br.com.ys.drogaria.domain.Estado;

public class CidadeDAOTest {

	@Test
	@Ignore
	public void salvar() {
		Cidade cidade = new Cidade();
		Estado estado = new Estado();
		estado.setCodigo(2l);
		cidade.setNome("Santo Andre");
		cidade.setEstado(estado);
		CidadeDAO dao = new CidadeDAO();
		dao.salvar(cidade);
	}

	@Test
	@Ignore
	public void listar() {
		CidadeDAO dao = new CidadeDAO();
		List<Cidade> cidades = dao.listar();
		for (Cidade cidade : cidades) {
			System.out.println(cidade.getCodigo() + " - " + cidade.getNome() + " - " + cidade.getEstado().getCodigo()
					+ " - " + cidade.getEstado().getNome());
		}
	}
	
	@Test 
	public void buscar() {
		Long codigo = 1l;
		CidadeDAO dao = new CidadeDAO();
		Cidade cidade = dao.buscar(codigo);
		System.out.println(cidade.getCodigo() + " - " + cidade.getNome() + " - " + cidade.getEstado().getCodigo()
				+ " - " + cidade.getEstado().getNome());
	}

}
