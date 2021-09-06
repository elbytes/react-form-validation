import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import validateInput from './validateInput'

const FormPage = () => {
  const [sampleSize, setSampleSize] = useState('')
  const [sampleMean, setSampleMean] = useState('')
  const [standardDeviation, setStandardDeviation] = useState('')
  const [hypothesizedTestCheck, setHypothesizedTestCheck] = useState(false)
  const [hypothesizedMean, setHypothesizedMean] = useState('')
  const [hypothesizedMeanLabel, setHypothesizedMeanLabel] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submitting')
  }
  const resetHandler = () => {}

  return (
    <Container>
      <h1>Test Assignments for Minitab - El</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group as={Row} className='mb-3' controlId='samleSize'>
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
        </Form.Group>
        <Form.Group as={Row} className='mb-3' controlId='formBasicCheckbox'>
          <Col lg={6}>
            <Form.Check
              type='checkbox'
              className='control-label'
              label='Perform hypothesis test'
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3' controlId='hypothesizedMean'>
          <Form.Label column sm={2} className='control-label'>
            Hypothesized Mean
          </Form.Label>
          <Col lg={6}>
            <Form.Control
              disabled
              type='text'
              value={hypothesizedMean}
              onChange={(e) => setHypothesizedMean(e.target.value)}
            ></Form.Control>
          </Col>
        </Form.Group>
        <div className='x-0'>
          <Button
            variant='primary'
            className='btn btn-primary px-5'
            onClick={submitHandler}
          >
            OK
          </Button>
          <Button variant='secondary' className='px-5 mx-2'>
            Reset
          </Button>
        </div>
      </Form>
      <div className='results'>
        <h3>Results</h3>
        <p>Sample size: {sampleSize}</p>
        <p>Sample mean: {sampleMean}</p>
        <p>Standard deviation: {standardDeviation}</p>
        <p>Perform hypothesis test: {hypothesizedTestCheck}</p>
        <p>Hypothesized Mean: {hypothesizedMean} </p>
      </div>
    </Container>
  )
}

export default FormPage
