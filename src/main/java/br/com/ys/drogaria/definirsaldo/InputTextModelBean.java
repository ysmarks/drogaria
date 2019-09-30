package br.com.ys.drogaria.definirsaldo;

import java.util.Date;
import java.util.GregorianCalendar;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.event.ActionEvent;

@ManagedBean
@RequestScoped
public class InputTextModelBean {
 
	private Date date = new GregorianCalendar().getTime();
	private String text;
	private double valor1;
	private double valor2;
	private double valor3;
 
	public void calcula() {
		valor3 = (valor1 * valor2) / 100;
	}
	
	public void mostraId(ActionEvent e) {
		
		valor3 = (valor1 * valor2) / 100;
		System.out.println(e.getComponent().getId());
	}
	public Date getDate() {
		return date;
	}
 
	public String getText() {
		return text;
	}
 
	public void setDate(Date date) {
		this.date = date;
	}
 
	public void setText(String text) {
		this.text = text;
	}

	public double getValor1() {
		return valor1;
	}

	public void setValor1(double valor1) {
		this.valor1 = valor1;
	}

	public double getValor2() {
		return valor2;
	}

	public void setValor2(double valor2) {
		this.valor2 = valor2;
	}

	public double getValor3() {
		return valor3;
	}

	public void setValor3(double valor3) {
		this.valor3 = valor3;
	}
	
	
}