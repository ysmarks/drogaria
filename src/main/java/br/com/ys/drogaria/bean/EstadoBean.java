package br.com.ys.drogaria.bean;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;

import org.omnifaces.util.Messages;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.ys.drogaria.dao.EstadoDAO;
import br.com.ys.drogaria.domain.Estado;

@SuppressWarnings("serial")
@ManagedBean
@ViewScoped
public class EstadoBean implements Serializable {

	private static final Logger LOGGER = LoggerFactory.getLogger(EstadoBean.class);
	
	private Estado estado;
	private List<Estado> estados;
	
	
	public Estado getEstado() {
		return estado;
	}


	public void setEstado(Estado estado) {
		this.estado = estado;
	}
	
	public List<Estado> getEstados() {
		return estados;
	}
	
	public void setEstados(List<Estado> estados) {
		this.estados = estados;
	}

	public void novo() {
		estado = new Estado();
	}
	
	@PostConstruct
	public void lista() {
		LOGGER.info("Iniciando variaveis no PostConstruct");
		try {
			EstadoDAO dao = new EstadoDAO();
			estados = dao.listar();
		} catch (RuntimeException e) {
			Messages.addGlobalError("Ocorreu um erro ao tentar slavar a lista de Estados");
			e.printStackTrace();
		}
	}

	public void salvar() {
		/*
		 * String texto = "Programa Java Web"; FacesMessage mensagem = new
		 * FacesMessage(FacesMessage.SEVERITY_INFO, texto, texto); FacesContext contexto
		 * = FacesContext.getCurrentInstance(); contexto.addMessage(null, mensagem);
		 */
		try {
			EstadoDAO dao = new EstadoDAO();
			dao.merge(estado);
			estados = dao.listar();
			Messages.addGlobalInfo("Estado salvo com sucesso");
		} catch (RuntimeException e) {
			Messages.addGlobalError("Ocorreu um erro ao tentar salvar o Estado");
			e.printStackTrace();
			
		}
		
	}
	
	public void excluir(ActionEvent evento) {
		try {
		estado = (Estado) evento.getComponent().getAttributes().get("excluirEstado");
		EstadoDAO dao = new EstadoDAO();
		dao.excluir(estado);
		estados = dao.listar();
		Messages.addGlobalInfo("Estado removido com sucesso");
		} catch (RuntimeException e) {
			Messages.addFlashGlobalError("Ocorreu um erro ao tentar remover o Estado");
			e.printStackTrace();
		}
		//Messages.addGlobalInfo("Estado: " + estado.getNome() + " Excluido dom sucesso");
	}
	
	public void editar(ActionEvent evento) {
		estado = (Estado) evento.getComponent().getAttributes().get("editarEstado");
	}
}
