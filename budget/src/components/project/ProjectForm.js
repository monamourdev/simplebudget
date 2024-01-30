import styles from './ProjectForm.module.css'
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm() {
    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <div>
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />
            </div>
            <div>
                <Select 
                    name="category_id"
                    text="Selecione a categoria" 
                />


            </div>
            <SubmitButton text="Criar projeto" />
        </form>
    )
}

export default ProjectForm;