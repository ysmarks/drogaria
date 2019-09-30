package br.com.ys.drogaria.dao;

import java.util.List;

import org.junit.Ignore;
import org.junit.Test;

import br.com.ys.drogaria.domain.Estado;

public class EstadoDAOTest {

	@Test
	@Ignore
	public void salvar() {
		Estado estado = new Estado();
		estado.setNome("Goias");
		estado.setSigla("Go");
		
		EstadoDAO dao = new EstadoDAO();
		dao.salvar(estado);
	}
	
	@Test
	@Ignore
	public void listar() {
		EstadoDAO dao = new EstadoDAO();
		List<Estado> estados = dao.listar();
		for (Estado estado : estados) {
			System.out.println(estado.getCodigo() + " - " + estado.getNome() + " - " + estado.getSigla());
		}
	}
	
	@Test
	@Ignore
	public void buscar() {
		Long codigo = 6l;
		EstadoDAO dao = new EstadoDAO();
		Estado estado = dao.buscar(codigo);
		System.out.println(estado.getCodigo() + " - " + estado.getNome() + " - " + estado.getSigla());
	}
	
	@Test
	@Ignore
	public void excluir() {
		Long codigo = 6l;
		EstadoDAO dao = new EstadoDAO();
		Estado estado = dao.buscar(codigo);
		if(estado == null) {
			System.out.println("nenhum registro encontrado");
		}else {
		dao.excluir(estado);
		System.out.println("Estado excluido");
		System.out.println(estado.getCodigo() + " - " + estado.getNome() + " - " + estado.getSigla());
		}
	}
	
	@Test
	@Ignore
	public void editar() {
		Long codigo = 3l;
		EstadoDAO dao = new EstadoDAO();
		Estado estado = dao.buscar(codigo);
		System.out.println("Estado pesquisado");
		System.out.println(estado.getCodigo() + " - " + estado.getNome() + " - " + estado.getSigla());
		
		estado.setNome("Minas Gerais");
		estado.setSigla("MG");
		dao.editar(estado);
		System.out.println("Estado Editado");
		System.out.println(estado.getCodigo() + " - " + estado.getNome() + " - " + estado.getSigla());
	}

}
