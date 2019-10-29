package model;

import java.time.Instant;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Dia {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private Date dia;
	private Instant entrada;
	private Instant almoco;
	private Instant retornoAlmoco;
	private Instant saida;
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDia() {
		return dia;
	}

	public void setDia(Date dia) {
		this.dia = dia;
	}

	public Instant getEntrada() {
		return entrada;
	}

	public void setEntrada(Instant entrada) {
		this.entrada = entrada;
	}

	public Instant getAlmoco() {
		return almoco;
	}

	public void setAlmoco(Instant almoco) {
		this.almoco = almoco;
	}

	public Instant getRetornoAlmoco() {
		return retornoAlmoco;
	}

	public void setRetornoAlmoco(Instant retornoAlmoco) {
		this.retornoAlmoco = retornoAlmoco;
	}

	public Instant getSaida() {
		return saida;
	}

	public void setSaida(Instant saida) {
		this.saida = saida;
	}

	public Dia(Date dia, Instant entrada, Instant almoco, Instant retornoAlmoco, Instant saida) {
		super();
		this.dia = dia;
		this.entrada = entrada;
		this.almoco = almoco;
		this.retornoAlmoco = retornoAlmoco;
		this.saida = saida;
	}

	@Override
	public String toString() {
		return "Dia [dia=" + dia + ", entrada=" + entrada + ", almoco=" + almoco + ", retornoAlmoco=" + retornoAlmoco
				+ ", saida=" + saida + "]";
	}



}
