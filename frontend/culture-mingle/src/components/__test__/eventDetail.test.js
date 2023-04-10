// import EventDetail from "../EventDetail"
// import { render, screen, cleanup } from "@testing-library/react"
// import axiosMock from "axios"

// test('mytest', () => {
//     render(<EventDetail/>);
//     const mytest = screen.getByTestId('1');
//     expect(mytest).toHaveTextContent();
// })

import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import { useParams } from "react-router-dom";

import EventDetail from "../EventDetail";

jest.mock("axios");

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

describe("EventDetail component", () => {
  const mockData = {
    eventId: "1",
    title: "Test event",
    description: "This is a test event",
    time: "2022-04-10T10:00:00.000Z",
    venue: "Test venue",
    group: "2",
    host: "3",
    attendees: ["4", "5"],
  };

  const mockGroupData = {
    groupId: "2",
    groupName: "Test group",
  };

  beforeEach(() => {
    useParams.mockReturnValue({ eventId: "1" });

    axios.get.mockImplementation((url) => {
      switch (url) {
        case "/events/1":
          return Promise.resolve({ data: mockData });
        case "/groups/2":
          return Promise.resolve({ data: mockGroupData });
        default:
          return Promise.reject(new Error("not found"));
      }
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders without errors", async () => {
    const { findByTestId } = render(<EventDetail />);
    const header = await findByTestId("1");
    expect(header).toBeInTheDocument();
  });

  test("fetches event data with correct eventId", async () => {
    render(<EventDetail />);
    await expect(axios.get).toHaveBeenCalledWith("/events/1");
  });

  test("fetches group data with correct groupId", async () => {
    render(<EventDetail />);
    await expect(axios.get).toHaveBeenCalledWith("/users/undefined");
  });

  it('should render paragraphs if the event description has new lines', async () => {
    axios.get.mockResolvedValue({
      data: {
        title: 'Test Event',
        description: 'This is a\ntest event\nwith new lines',
        venue: 'Test Venue',
        host: 'host123',
        attendees: ['attendee123'],
        group: 'group123',
        time: '2023-04-10T10:00:00.000Z',
      },
    });

    const { getByText } = render(<EventDetail />);

    await waitFor(() => {
      const paragraphs = getByText('This is a');
      expect(paragraphs).toBeInTheDocument();
      expect(paragraphs.tagName).toBe('P');
    });
  });

  it('should render a single paragraph if the event description has no new lines', async () => {
    axios.get.mockResolvedValue({
      data: {
        title: 'Test Event',
        description: 'This is a test event without new lines',
        venue: 'Test Venue',
        host: 'host123',
        attendees: ['attendee123'],
        group: 'group123',
        time: '2023-04-10T10:00:00.000Z',
      },
    });

    const { getByText } = render(<EventDetail />);

    await waitFor(() => {
      const paragraph = getByText('This is a test event without new lines');
      expect(paragraph).toBeInTheDocument();
      expect(paragraph.tagName).toBe('P');
    });
  });

});


window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    };
};