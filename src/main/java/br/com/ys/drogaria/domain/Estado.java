package br.com.ys.drogaria.domain;

import javax.persistence.Column;
import javax.persistence.Entity;

@SuppressWarnings("serial")
@Entity
public class Estado extends GenericDomain{

	@Column(length = 2, nullable = false, name = "sigla_es")
	private String sigla;
	@Column(length = 40, nullable = false, name = "nome_es")
	private String nome;
	
	public String getSigla() {
		return sigla;
	}
	public void setSigla(String sigla) {
		this.sigla = sigla;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	
}
