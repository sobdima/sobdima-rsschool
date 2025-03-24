import { error } from 'console';
import './sources.css';

interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp')! as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            sourceClone.querySelector<HTMLElement>('.source__item-name')!.textContent = item.name;
            sourceClone.querySelector<HTMLElement>('.source__item')!.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector<HTMLElement>('.sources')!.append(fragment);
    }
}

export default Sources;
