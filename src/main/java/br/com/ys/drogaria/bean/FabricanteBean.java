package br.com.ys.drogaria.bean;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.ys.drogaria.dao.FabricanteDAO;
import br.com.ys.drogaria.domain.Fabricante;
import br.com.ys.drogaria.exception.FabricanteBeanException;

@SuppressWarnings("serial")
@ManagedBean
@ViewScoped
public class FabricanteBean implements Serializable {

	private static final Logger LOGGER = LoggerFactory.getLogger(FabricanteBean.class);
	
	private Fabricante fabricante;

	private List<Fabricante> fabricantes;

	public Fabricante getFabricante() {
		return fabricante;
	}

	@PostConstruct
	public void init() {
		
		LOGGER.info("Iniciando variaveis - postConstruct");
		
		try {
			
			FabricanteDAO dao = new FabricanteDAO();
			fabricantes = dao.listar();
			
		} catch (FabricanteBeanException e) {
			LOGGER.error("Ocorreu um erro ao processar os dados");
			e.printStackTrace();
		}
	}

	//Metodo Editar
	public void editar() {
		
	}
	
	//Metodo Excluir
	public void excluir() {
		
	}
	public void setFabricante(Fabricante fabricante) {
		this.fabricante = fabricante;
	}

	public List<Fabricante> getFabricantes() {
		return fabricantes;
	}

	public void setFabricantes(List<Fabricante> listaFabricante) {
		this.fabricantes = listaFabricante;
	}

}
