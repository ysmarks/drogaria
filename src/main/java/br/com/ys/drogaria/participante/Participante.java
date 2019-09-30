package br.com.ys.drogaria.participante;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;

//Define decoradores
@ManagedBean(name = "Participante")
@RequestScoped
public class Participante {

 // Define atributos privados
 private long id;
 private String nome;
 private String sobrenome;
 private String cargo;
 private Double salario;

 // Metodos Getter e Setter
 public long getId() {
     return id;
 }

 public void setId(long id) {
     this.id = id;
 }

 public String getNome() {
     return nome;
 }

 public void setNome(String nome) {
     this.nome = nome;
 }

 public String getSobrenome() {
     return sobrenome;
 }

 public void setSobrenome(String sobrenome) {
     this.sobrenome = sobrenome;
 }

 public String getCargo() {
     return cargo;
 }

 public void setCargo(String cargo) {
     this.cargo = cargo;
 }

 public Double getSalario() {
     return salario;
 }

 public void setSalario(Double salario) {
     this.salario = salario;
 }

 // Método de Ação (clique do botão)
 public String Acao() {
     System.out.println("Clique do botão");
     System.out.println("Nome: " + this.getNome() + "\n " +
                        "Sobrenome: " + this.getSobrenome() + "\n " +
                        "Cargo: " + this.getCargo() + "\n " +
                        "Salário: " + this.getSalario() + "\n ");
     return null;
 }
}
