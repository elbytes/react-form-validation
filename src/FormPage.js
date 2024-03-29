import React, { useState } from 'react'
import { Container, Form, Row, Col, Button, Table } from 'react-bootstrap'
import validateInput from './validateInput'

const FormPage = () => {
  const [sampleSize, setSampleSize] = useState('')
  const [sampleMean, setSampleMean] = useState('')
  const [standardDeviation, setStandardDeviation] = useState('')
  const [hypothesizedTestCheck, setHypothesizedTestCheck] = useState(false)
  const [hypothesizedMean, setHypothesizedMean] = useState('')
  const [error, setError] = useState({
    sampleSize: '',
    sampleMean: '',
    standardDeviation: '',
    hypothesizedMean: '',
    submission: false,
  })

  const styles = {
    labelStyleDisabled: { color: 'lightgrey' },
    labelStyleEnabled: { color: '#000' },
    enableResults: { display: 'block' },
    disableResults: { display: 'none' },
    errorStyle: { color: 'red', margin: '1.5rem' },
  }

  const performHypothesisTest = (e) => {
    setHypothesizedTestCheck(e.target.checked)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Submitting')
    const isValid = validateInput({
      sampleSize: sampleSize,
      sampleMean: sampleMean,
      standardDeviation: standardDeviation,
      hypothesizedTestCheck: hypothesizedTestCheck,
      hypothesizedMean: hypothesizedMean,
    })
    setError((prevState) => {
      return {
        ...prevState,
        sampleSize: isValid.sampleSize,
        sampleMean: isValid.sampleMean,
        standardDeviation: isValid.standardDeviation,
        hypothesizedMean: isValid.hypothesizedMean,
        submission: isValid.submission,
      }
    })
  }

  const resetHandler = (e) => {
    e.preventDefault()
    setSampleSize('')
    setSampleMean('')
    setStandardDeviation('')
    setHypothesizedTestCheck(false)
    setHypothesizedMean('')
    setError((prevState) => {
      return {
        ...prevState,
        sampleSize: '',
        sampleMean: '',
        standardDeviation: '',
        hypothesizedMean: '',
        submission: false,
      }
    })
    console.log('Resetting form')
  }

  return (
    <Container>
      <h1>Test Assignments for Minitab - El</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group as={Row} className='mb-3' controlId='sampleSize'>
          <Form.Label column lg={2} className='control-label'>
            Sample size:
          </Form.Label>
          <Col lg={6}>
            <Form.Control
              type='text'
              value={sampleSize}
              onChange={(e) => setSampleSize(e.target.value)}
            ></Form.Control>
          </Col>
          <Row>
            <Col>
              <p style={styles.errorStyle}>{error.sampleSize}</p>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group as={Row} className='mb-3' controlId='sampleMean'>
          <Form.Label column sm={2} className='control-label'>
            Sample mean:
          </Form.Label>
          <Col lg={6}>
            <Form.Control
              type='text'
              value={sampleMean}
              onChange={(e) => setSampleMean(e.target.value)}
            ></Form.Control>
          </Col>
          <Row>
            <Col>
              <p style={styles.errorStyle}>{error.sampleMean}</p>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group as={Row} className='mb-3' controlId='standardDeviation'>
          <Form.Label column sm={2} className='control-label'>
            Standard deviation:
          </Form.Label>
          <Col lg={6}>
            <Form.Control
              type='text'
              value={standardDeviation}
              onChange={(e) => setStandardDeviation(e.target.value)}
            ></Form.Control>
          </Col>
          <Row>
            <Col>
              <p style={styles.errorStyle}>{error.standardDeviation}</p>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group as={Row} className='mb-3' controlId='formBasicCheckbox'>
          <Col lg={6}>
            <Form.Check
              type='checkbox'
              className='control-label'
              label='Perform hypothesis test'
              checked={hypothesizedTestCheck}
              onChange={(e) => performHypothesisTest(e)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3' controlId='hypothesizedMean'>
          <Form.Label
            column
            sm={2}
            className='control-label'
            style={
              hypothesizedTestCheck
                ? styles.labelStyleEnabled
                : styles.labelStyleDisabled
            }
          >
            Hypothesized Mean
          </Form.Label>
          <Col lg={6}>
            <Form.Control
              disabled={!hypothesizedTestCheck}
              type='text'
              value={hypothesizedMean}
              onChange={(e) => setHypothesizedMean(e.target.value)}
            ></Form.Control>
          </Col>
          <Row>
            <Col>
              <p style={styles.errorStyle}>{error.hypothesizedMean}</p>
            </Col>
          </Row>
        </Form.Group>
        <div className='x-0'>
          <Button
            variant='primary'
            className='btn btn-primary px-5'
            onClick={submitHandler}
          >
            OK
          </Button>
          <Button
            variant='secondary'
            className='px-5 mx-2'
            onClick={resetHandler}
          >
            Reset
          </Button>
        </div>
      </Form>
      {error.submission ? (
        <div className='results'>
          <h4>Results</h4>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Sample size: </td>
                <td>{sampleSize}</td>
              </tr>
              <tr>
                <td>Sample mean: </td>
                <td>{sampleMean}</td>
              </tr>
              <tr>
                <td>Standard deviation: </td>
                <td>{standardDeviation}</td>
              </tr>
              <tr>
                <td>Perform hypothesis test: </td>
                <td>{hypothesizedTestCheck.toString()}</td>
              </tr>
              {hypothesizedTestCheck && (
                <tr>
                  <td>Hypothesized Mean: </td>
                  <td>{hypothesizedMean}</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      ) : null}
    </Container>
  )
}

export default FormPage
