const validateInput = (values) => {
  let errors = {
    sampleSize: '',
    sampleMean: '',
    standardDeviation: '',
    hypothesizedTestCheck: '',
    hypothesizedMean: '',
  }

  //sample size validation
  if (!values.sampleSize.trim()) {
    errors.sampleSize = 'Sample size required'
  } else if (isNaN(values.sampleSize)) {
    errors.sampleSize = 'Sample size must be a number'
  } else if (parseInt(values.sampleSize) % 1 !== 0) {
    errors.sampleSize = 'Sample size must be a whole number'
  } else if (parseInt(values.sampleSize) < 2) {
    errors.sampleSize = 'Sample size must be equal or greater than 2'
  }

  //sample mean validation
  if (!values.sampleMean.trim()) {
    errors.sampleMean = 'Sample mean required'
  }
  if (isNaN(values.sampleMean)) {
    errors.sampleMean = 'Sample mean must be a number'
  }

  //standard deviation validation
  if (!values.standardDeviation.trim()) {
    errors.standardDeviation = 'Standard deviation required'
  } else if (isNaN(values.standardDeviation)) {
    errors.standardDeviation = 'Standard deviation must be a number'
  } else if (
    parseInt(values.standardDeviation) < 0 ||
    parseInt(values.standardDeviation) === 0
  ) {
    errors.standardDeviation = 'Standard deviation must be greater than zero'
  }

  //hypothesized mean validation
  if (values.hypothesizedTestCheck && !values.hypothesizedMean.trim()) {
    errors.hypothesizedMean =
      'If perform hypothesis test is checked, Hypothesizd Mean is required'
  } else if (isNaN(values.hypothesizedMean)) {
    errors.hypothesizedMean = 'Hypothesized Mean must be a number'
  }

  return errors
}

export default validateInput
