import * as Yup from 'yup';

const MovieRegistrationSchema = Yup.object().shape({
    movie: Yup.object().shape({
        title: Yup.string()
                .min(2, 'Too Short!')
                .max(20, 'Too Long!')
                .required('Required'),
        poster_path: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
        overview: Yup.string()
                .min(2, 'Too Short!')
                .max(60, 'Too Long!')
                .required('Required'),
        runtime: Yup.number()
                .min(2, 'Too Short!')
                .max(60, 'Too Long!')
                .required('Required')
    })
});

export default MovieRegistrationSchema;