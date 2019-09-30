package br.com.ys.drogaria.util;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

public class HibernateUtil {

	private static final SessionFactory fabricaDeSessoes = buildSessionFactory();

	private static SessionFactory buildSessionFactory() {
		try {
			// Create the SessionFactory from hibernate.cfg.xml
			Configuration configuracao = new Configuration().configure();
			ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
					.applySettings(configuracao.getProperties()).build();
			SessionFactory fabrica = configuracao.buildSessionFactory(serviceRegistry);
			return fabrica;
		} catch (Throwable ex) {
			System.err.println("A fabrica de sessoes não pode ser criada" + ex);
			throw new ExceptionInInitializerError(ex);
		}
	}

	public static SessionFactory getFabricaDeSessoes() {
		return fabricaDeSessoes;
	}

}
