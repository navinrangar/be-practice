import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BoatGoal from 'App/Models/BoatGoal';
import BoatGoalValidator from 'App/Validators/BoatGoalValidator'

export default class BoatGoalsController {
    public async save({ request }: HttpContextContract) {
        // const data = request.requestBody;
        // console.log('data', data);

        // let singleData = null;
        // let finalData = []

        const data = request.requestBody;
        const goals = await Promise.all(data.map(async (goal) => {
            return await BoatGoal.create(goal)
        }))

        return goals;


        // try {
        //     finalData = data.map(async (single) => {
        //         singleData = await single.validate(BoatGoalValidator);
        //         return await BoatGoal.create(data);
        //     })

        //     return finalData;
        // } catch (e) {
        //     throw e
        // }

    }
}