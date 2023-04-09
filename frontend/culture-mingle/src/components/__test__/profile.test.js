import { render, fireEvent, waitFor, screen, act } from "@testing-library/react"
import Profile from '../Profile';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
jest.mock('axios');
describe('Profile component', () => {
    const mockEventData = [
        {
            id: 1,
            name: 'Event 1',
            description: 'Description for event 1',
        },
        {
            id: 2,
            name: 'Event 2',
            description: 'Description for event 2',
        },
    ];

    const mockGroupData = [
        {
            id: 1,
            name: 'Group 1',
            description: 'Description for group 1',
        },
        {
            id: 2,
            name: 'Group 2',
            description: 'Description for group 2',
        },
    ];

    beforeEach(() => {
        localStorage.setItem('userId', '1');
        localStorage.setItem('userEmail', 'test@example.com');
        localStorage.setItem('userName', 'Test User');
    });

    afterEach(() => {
        localStorage.clear();
        jest.resetAllMocks();
    });

    it('should render the user information', () => {
        render(<BrowserRouter>
            <Profile />
        </BrowserRouter>);
        const emailElement = screen.getByText(/test@example.com/i);
        expect(emailElement).toBeInTheDocument();
    });

    it('should render the user information', async () => {
        axios.get.mockResolvedValueOnce({ data: {} });
        render(
            <BrowserRouter>
                <Profile />
            </BrowserRouter>
        );
        await waitFor(() => {
            const usernameElement = screen.getByText('Test User');
            const emailElement = screen.getByText(/test@example.com/i);
            expect(usernameElement).toBeInTheDocument();
            expect(emailElement).toBeInTheDocument();
        });
    });

    it('should display a message when the user has no event history', async () => {
        act(() => {
            axios.get.mockResolvedValueOnce({ data: { eventHistory: [] } });
            render(
                <BrowserRouter>
                    <Profile />
                </BrowserRouter>
            );
        });
        await waitFor(() => {
            const noEventElement = screen.getByText(
                /Currently No Event/i
            );
            expect(noEventElement).toBeInTheDocument();
        });
    });

    it('should render event data if the user has event history', () => {
        render(<BrowserRouter>
            <Profile />
        </BrowserRouter>);
        const eventDataElement = screen.getByText('My Events');
        expect(eventDataElement).toBeInTheDocument();
    });

    it('should render group data if the user is a member of at least one group', () => {
        render(<BrowserRouter>
            <Profile />
        </BrowserRouter>);
        const groupDataElement = screen.getByText('My Groups');
        expect(groupDataElement).toBeInTheDocument();
    });
});

window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    };
};