import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import { Container, SearchContainer, SearchWrapper, Title, Input, InputField, Row, Button, FancySelect } from './App.styles';
import { OMDB_URL } from './constants';
import SearchResults from './SearchResults';

const validationSchema = yup.object().shape({
  search: yup.string().required(),
  lang: yup.string(),
  season: yup.number().positive().integer(),
  chapter: yup.number().positive().integer(),
  year: yup.number().positive().integer(),
});

const initialValues = {
  search: '',
  lang: 'es',
  season: '',
  episode: '',
  year: '',
}

function App() {

  const [omdbResults, setOmdbResults] = useState();
  const [formValues, setFormValues] = useState({});

  const search = (values) => {
    const { search, year, season, episode } = values;
    setFormValues(values);
    fetch(`${OMDB_URL}&s=${encodeURIComponent(search)}&Season=${encodeURIComponent(season)}&Episode=${encodeURIComponent(episode)}&y=${encodeURIComponent(year)}`).then(async (resp) => {
      const data = await resp.json();
      if (data.Search) {
        setOmdbResults(data.Search);
      }
    }).catch(err => console.error(err));
  };

  return (
    <Container className="App">
      <SearchWrapper>
        <SearchContainer>
          <Title>Search</Title>
          <Formik onSubmit={search} validationSchema={validationSchema} initialValues={initialValues}>
            {(stuff) => (
              <Form>
                <Row>
                  <InputField>
                    <label>Title:</label>
                    <Field name="search" type="text" as={Input} />
                  </InputField>
                </Row>
                <Row>
                  <InputField className="half">
                    <label>Season:</label>
                    <Field name="season" type="number" pattern="[0-9]" as={Input} />
                  </InputField>
                  <InputField className="half">
                    <label>Episode:</label>
                    <Field name="episode" type="number" pattern="[0-9]" as={Input} />
                  </InputField>
                </Row>
                <Row>
                  <InputField className="half">
                    <label>Year:</label>
                    <Field name="year" type="number" as={Input} />
                  </InputField>
                  <InputField className="half">
                    <label>Lang:</label>
                    <Field name="lang">{({ field }) => (
                      <FancySelect>
                        <select {...field}>
                          <option value="esp">Spanish</option>
                          <option value="eng">English</option>
                        </select>
                      </FancySelect>
                    )}</Field>
                  </InputField>
                </Row>
                <Row className="text-right">
                  <Button type="submit">Search</Button>
                </Row>
              </Form>
            )}
          </Formik>
          <SearchResults formValues={formValues} omdbResults={omdbResults} />
        </SearchContainer>
      </SearchWrapper>
    </Container >
  );
}

export default App;
