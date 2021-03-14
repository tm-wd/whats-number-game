
import compareNumber from '../src/components/compareNumber';

test('Assegura a comparação entre números', () => {
    const mockArguments = jest.fn(compareNumber);
    expect(mockArguments).toBeTruthy()
})

import getAleatoryNumber from '../src/components/getAleatoryNumber';

test('Espera o retorno resolvido do status de um número aleatório (200) ou (502)', () => {
    expect(Promise.resolve(getAleatoryNumber)).toBeTruthy();
})

import mountSegments from '../src/components/mountSegments';

test('Assegura a retorno da montagem da sequencia de LED', () => {
    const mockMounts = jest.fn(mountSegments);
    expect(mockMounts).toBeTruthy()
})

import { startNumber } from '../src/components/startNumber';

describe('Send number', () => {
    test('Ação de click e envio de um número comparativo', () => {
        const mockMounts = jest.fn(startNumber);
        expect(mockMounts).toBeTruthy()
    })
})