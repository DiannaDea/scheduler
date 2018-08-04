module.exports = {
    "extends": "airbnb",
    'rules': {
        'max-len': ['error', {'code': 120}],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        'comma-dangle': [
            'error',
            {
                'arrays': 'never',
                'objects': 'never',
                'imports': 'never',
                'exports': 'never',
                'functions': 'ignore'
            }
        ]
    }
};
