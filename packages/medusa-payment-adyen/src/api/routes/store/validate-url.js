import { Validator, MedusaError } from "medusa-core-utils"

export default async (req, res) => {
  const schema = Validator.object().keys({
    validation_url: Validator.string().required(),
    reject: Validator.required(),
    resolve: Validator.required(),
  })

  const { value, error } = schema.validate(req.body)
  if (error) {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, error.details)
  }

  try {
    const applepayProvider = req.scope.resolve(`pp_applepayAdyen`)

    const { data } = await applepayProvider.validateSession(
      value.validation_url
    )

    console.log(data)

    res.sendStatus(200)
  } catch (err) {
    console.log(error)
    throw err
  }
}
