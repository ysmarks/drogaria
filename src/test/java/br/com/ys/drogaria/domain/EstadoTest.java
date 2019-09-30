package br.com.ys.drogaria.domain;

import static pl.pojo.tester.api.assertion.Assertions.assertPojoMethodsFor;

import org.junit.Test;

import pl.pojo.tester.api.assertion.Method;

public class EstadoTest {

	@Test
	public void test() {
		Class<?> teste = Estado.class;
		
		assertPojoMethodsFor(teste)
		.testing(Method.GETTER, Method.SETTER)
		.areWellImplemented();
	}

}
