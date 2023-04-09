import Registration from "../Registration";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes , RenderResult, MemoryRouter} from "react-router-dom";
import {render, fireEvent, waitFor, screen, act} from "@testing-library/react"

let container = null;
let wrapper2 = RenderResult;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    wrapper2 = render(<BrowserRouter><Registration/></BrowserRouter>,container);
});

afterEach(() => {
    // cleanup on exiting
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('registration test', () => {
    it('should render Registration component', () => {
        expect(wrapper2.getByLabelText(/E-mail/i)).toBeInTheDocument();
    });

    it('should render in Ristration component',()=>{
        expect(wrapper2.getByLabelText(/Name/i)).toBeInTheDocument();
    })
});

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};