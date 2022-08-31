module.exports = {
    extends: 'eslint-config-it-incubator',
    plugins: ['import'],
    rules: {
        'no-alert': 'error',
        'no-debugger': 'error',
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': [
            'error',
            {
                ignoreEnums: true,
                ignoreNumericLiteralTypes: true,
                ignore: [0, 1, -1],
            },
        ],
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                pathGroupsExcludedImportTypes: ['react'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                ],
            },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: true,
                peerDependencies: true,
            },
        ],
    },
}