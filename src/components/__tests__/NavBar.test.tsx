import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import NavBar from 'components/NavBar';
import { createMemoryHistory } from 'history';
import { routeFilters } from 'helper';
import { WEBSITE_NAME } from '../../constants';

jest.mock('components/SearchForm', () => () => <div data-testid="search-form" />);

describe('NavBar', () => {
  let dom: HTMLElement;

  beforeEach(() => {
    const history = createMemoryHistory();
    history.push('/movies');
    const { container } = render(
      <Router history={history}>
        <NavBar />
      </Router>,
    );
    dom = container;
  });

  test('should render website name', () => {
    expect(screen.getByText(new RegExp(`${WEBSITE_NAME}`))).toBeInTheDocument();
  });

  test('should render all navbar links with active element as popular', () => {
    routeFilters.forEach(({ value }) => expect(screen.getByText(value)).toBeInTheDocument());
    expect(dom.getElementsByClassName('active').length).toBe(1);
    const activeElement = dom.getElementsByClassName('active')[0];
    expect(activeElement).toHaveTextContent(routeFilters[0].value);
  });

  test('should render search form', () => {
    expect(screen.getByTestId('search-form')).toBeInTheDocument();
  });
});
