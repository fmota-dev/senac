let id = 1;
const eventos = [];

class Evento {
	constructor(id, titulo, descricao, data, local, criadoEm, atualizadoEm) {
		this.id = id;
		this.titulo = titulo;
		this.descricao = descricao;
		this.data = data;
		this.local = local;
		this.criadoEm = criadoEm;
		this.atualizadoEm = atualizadoEm;
	}

	criarEvento(titulo, descricao, data, local) {
		const criadoEm = new Date();
		const atualizadoEm = new Date();
		const dataObj = new Date(data);
		const dataLocal = new Date(
			dataObj.getTime() - dataObj.getTimezoneOffset() * 60000
		)
			.toISOString()
			.split('T')[0];
		const evento = new Evento(
			id,
			titulo,
			descricao,
			dataLocal,
			local,
			criadoEm,
			atualizadoEm
		);
		id++;
		eventos.push(evento);
		return evento;
	}

	listarEventos() {
		return eventos;
	}

	obterEventoPorId(id) {
		const index = eventos.findIndex((evento) => evento.id == id);
		if (index === -1) {
			return null;
		} else {
			return eventos[index];
		}
	}

	atualizarEvento(id, titulo, descricao, data, local) {
		const index = eventos.findIndex((evento) => evento.id == id);
		if (index === -1) {
			return null;
		} else {
			if (titulo) {
				eventos[index].titulo = titulo;
			}
			if (descricao) {
				eventos[index].descricao = descricao;
			}
			if (data) {
				eventos[index].data = data;
			}
			if (local) {
				eventos[index].local = local;
			}
			eventos[index].atualizadoEm = new Date();
			return eventos[index];
		}
	}

	excluirEvento(id) {
		const index = eventos.findIndex((evento) => evento.id == id);
		if (index !== -1) {
			eventos.splice(index, 1);
			return true;
		}
		return false;
	}
}

module.exports = Evento;
