class Funcionario {
    nome;
    cpf;
    salario;
    aumento = 0.1;

    constructor(nome, cpf, salario) {
        this.nome = nome;
        this.cpf = cpf;
        this.salario = salario;
    }

    receberAumento() {
        this.salario += this.salario * this.aumento;
        console.log(
            `O salário de ${this.nome} teve aumento de ${this.aumento * 100
            }%. Novo salário: ${this.salario.toFixed(2)}`
        );
    }

    exibirDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Salário: ${this.salario.toFixed(2)}`);
    }
}

class Gerente extends Funcionario {
    nivelGerencia;
    aumento = 0.15;

    constructor(nome, cpf, salario, nivelGerencia) {
        super(nome, cpf, salario);
        this.nivelGerencia = nivelGerencia;
    }

    exibirDados() {
        super.exibirDados();
        console.log(`Nível de Gerência: ${this.nivelGerencia}`);
    }
}

class Assistente extends Funcionario {
    matricula;

    constructor(nome, cpf, salario, matricula) {
        super(nome, cpf, salario);
        this.matricula = matricula;
    }

    exibirDados() {
        super.exibirDados();
        console.log(`Matrícula: ${this.matricula}`);
    }
}

class AssistenteTecnico extends Assistente {
    bonusSalarial;

    constructor(nome, cpf, salario, matricula, bonusSalarial) {
        super(nome, cpf, salario, matricula);
        this.bonusSalarial = bonusSalarial;
    }

    exibirDados() {
        super.exibirDados();
        console.log(`Bonus Salarial: ${this.bonusSalarial.toFixed(2)}`);
    }
}

class AssistenteAdministrativo extends Assistente {
    turno;
    adicionalNoturno;

    constructor(nome, cpf, salario, matricula, turno, adicionalNoturno) {
        super(nome, cpf, salario, matricula);
        this.turno = turno;
        this.adicionalNoturno = adicionalNoturno;
    }

    exibirDados() {
            super.exibirDados();
    
        if (this.turno =="noite") {
            console.log(`Turno: ${this.turno}`);
            console.log(`Adicional Noturno: ${this.adicionalNoturno.toFixed(2)}`);
        }
    }
}
const funcionario1 = new Funcionario("Fernanda", 45674185299, 8000);
const gerente1 = new Gerente("Marina", 99974185299, 15000, "Pleno");
const assistente1 = new Assistente("Daniela", 5555555299, 3000, 222);
const assistenteTecnico1 = new AssistenteTecnico("João", 3333333299, 5000,123,300);
const assistenteAdministrativo1 = new AssistenteAdministrativo("Juliana",22222185299,3500,444,"dia");
const assistenteAdministrativo2 = new AssistenteAdministrativo("Pedro", 7777185299, 3500, 455, "noite", 500);

funcionario1.receberAumento();
funcionario1.exibirDados();
console.log("**************************************************");
gerente1.receberAumento();
gerente1.exibirDados();
console.log("**************************************************");
assistente1.receberAumento();
assistente1.exibirDados();
console.log("**************************************************");
assistenteTecnico1.receberAumento();
assistenteTecnico1.exibirDados();
console.log("**************************************************");
assistenteAdministrativo1.receberAumento();
assistenteAdministrativo1.exibirDados();
console.log("**************************************************");
assistenteAdministrativo2.receberAumento();
assistenteAdministrativo2.exibirDados();
