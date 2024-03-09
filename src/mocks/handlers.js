import { rest } from "msw";

const baseURL = "https://p5-drf-api-50dd27c53894.herokuapp.com/"

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(ctx.json({
        "pk":4,
        "username":"user3",
        "email":"",
        "first_name":"",
        "last_name":"",
        "profile_id":4,
        "profile_image":"https://res.cloudinary.com/dx3tbsinf/image/upload/v1/media/../default_profile_thf96f"
    }
    ));
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  })
];