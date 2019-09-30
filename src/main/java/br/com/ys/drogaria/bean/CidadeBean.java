package br.com.ys.drogaria.bean;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.event.ActionEvent;

import org.omnifaces.util.Messages;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.ys.drogaria.dao.CidadeDAO;
import br.com.ys.drogaria.dao.EstadoDAO;
import br.com.ys.drogaria.domain.Cidade;
import br.com.ys.drogaria.domain.Estado;

@SuppressWarnings("serial")
@ManagedBean
@ViewScoped
public class CidadeBean implements Serializable {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(CidadeBean.class);
	
	private Cidade cidade;
	private List<Cidade> cidades;
	private List<Estado> estados;
	
	@PostConstruct
	public void listar() {
		
		try {
			CidadeDAO dao = new CidadeDAO();
			cidades = dao.listar();		
		} catch (RuntimeException e) {
			Messages.addGlobalInfo("Ocorreu um erro ao lista as cidades");
			LOGGER.error("Ocorreu um erro ao lista as cidades", e);
		}
	}
	
	public void novo() {
		
		try {
			cidade = new Cidade();
			EstadoDAO dao = new EstadoDAO();
			estados = dao.listar();
		} catch (RuntimeException e) {
			Messages.addGlobalInfo("Ocorreu um erro ao tentar listar a cidade.");
			LOGGER.error("Ocorreu um erro ao lista as cidades", e);
		}
		
	}
	
	public void salvar() {
		try {
			CidadeDAO cidadeDAO = new CidadeDAO();
			cidadeDAO.merge(cidade);
			EstadoDAO estadoDAO = new EstadoDAO();
			cidade = new Cidade();
			cidades = cidadeDAO.listar();
			estados = estadoDAO.listar();
		} catch (RuntimeException e) {
			LOGGER.error("Ocorreu um erro ao tentar salvar a cidade", e);
		}
	}
	
	public void excluir(ActionEvent evento) {
		try {
		cidade = (Cidade) evento.getComponent().getAttributes().get("cidadeSelecionada");
		CidadeDAO dao = new CidadeDAO();
		dao.excluir(cidade);
		cidades = dao.listar();
		Messages.addGlobalInfo("Cidade removido com sucesso");
		} catch (RuntimeException e) {
			Messages.addFlashGlobalError("Ocorreu um erro ao tentar remover a Cidade");
			e.printStackTrace();
		}

	}
	
	public void editar(ActionEvent evento) {
		try {
			cidade = (Cidade) evento.getComponent().getAttributes().get("editarCidade");
			EstadoDAO dao = new EstadoDAO();
			estados = dao.listar();
		} catch (RuntimeException e) {
			Messages.addGlobalInfo("Ocorreu um erro ao tentar listar a cidade.");
			e.printStackTrace();
		}
	}
	
	public List<Cidade> getCidades() {
		return cidades;
	}

	public void setCidades(List<Cidade> cidades) {
		this.cidades = cidades;
	}
	
	public Cidade getCidade() {
		return cidade;
	}

	public void setCidade(Cidade cidade) {
		this.cidade = cidade;
	}

	public List<Estado> getEstados() {
		return estados;
	}

	public void setEstados(List<Estado> estados) {
		this.estados = estados;
	}


}
