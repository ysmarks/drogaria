package br.com.ys.drogaria.dao;

import java.util.List;

import org.junit.Ignore;
import org.junit.Test;

import br.com.ys.drogaria.domain.Fabricante;

public class FabricanteDAOTest {

	@Test
	@Ignore
	public void salvar() {
		Fabricante fabricante = new Fabricante();
		fabricante.setDescricao("Fosfatin");

		FabricanteDAO dao = new FabricanteDAO();
		dao.salvar(fabricante);
	}

	@Test
	@Ignore
	public void listar() {
		FabricanteDAO dao = new FabricanteDAO();
		List<Fabricante> fabricantes = dao.listar();
		for (Fabricante fabricante : fabricantes) {
			System.out.println(fabricante.getCodigo() + " - " + fabricante.getDescricao());
		}
	}

	@Test
	@Ignore
	public void buscar() {
		Long codigo = 2l;
		FabricanteDAO dao = new FabricanteDAO();
		Fabricante fabricante = dao.buscar(codigo);
		System.out.println(fabricante.getCodigo() + " - " + fabricante.getDescricao());
	}

	@Test
	@Ignore
	public void excluir() {
		Long codigo = 2l;
		FabricanteDAO dao = new FabricanteDAO();
		Fabricante fabricante = dao.buscar(codigo);
		if (fabricante == null) {
			System.out.println("Nenhum registro encontrado");
		} else {
			dao.excluir(fabricante);
			System.out.println("Fabricante excluido");
			System.out.println(fabricante.getCodigo() + " - " + fabricante.getDescricao());
		}
	}

	@Test
	@Ignore
	public void editar() {
		Long codigo = 5l;
		FabricanteDAO dao = new FabricanteDAO();
		Fabricante fabricante = dao.buscar(codigo);
		if (fabricante == null) {
			System.out.println("Nenhum registro encontrado");
		} else {
			System.out.println("Fabricante pesquisado");
			System.out.println(fabricante.getCodigo() + " - " + fabricante.getDescricao());
			fabricante.setDescricao("Banduin");
			dao.editar(fabricante);
			System.out.println("Fabricante editado");
			System.out.println(fabricante.getCodigo() + " - " + fabricante.getDescricao());
		}
	}

}
