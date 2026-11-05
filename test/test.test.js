import test from 'node:test';
import assert from 'node:assert/strict';
import { verifierObservation } from '../src/registre.js';

// Saisie de modele
function saisieValide(changements = {}) {
  return {
    id: 'S11',
    parcelle: 'P6',
    texture: 'limoneux',
    pH: '5,8',
    etatHumidite: 'humide',
    ...changements,
  };
}

function saisieValide(changements = {}) {
  return {
    id: 'S11',
    parcelle: 'P6',
    texture: 'limoneux',
    pH: '5,8',
    etatHumidite: 'humide',
    ...changements,
  };
}

// Test 1 : les bornes du pH sont acceptées
test('pH : les bornes 0 et 14 sont acceptées', () => {
  assert.deepEqual(verifierObservation(saisieValide({ pH: '0' }), []), []);
  assert.deepEqual(verifierObservation(saisieValide({ pH: '14' }), []), []);
});

// Test 2 : juste en dehors des bornes, le pH est refusé
test('pH : -0,1 et 14,1 sont refusés', () => {
  assert.equal(verifierObservation(saisieValide({ pH: '-0,1' }), []).length, 1);
  assert.equal(verifierObservation(saisieValide({ pH: '14,1' }), []).length, 1);
});

// Test 3 : un pH vide ou avec du texte est refusé
test('pH : vide ou avec du texte est refusé', () => {
  assert.equal(verifierObservation(saisieValide({ pH: '' }), []).length, 1);
  assert.equal(verifierObservation(saisieValide({ pH: 'abc' }), []).length, 1);
  assert.equal(verifierObservation(saisieValide({ pH: 'pH 7' }), []).length, 1);
});

// Test 4 : une texture hors liste ou en majuscules est refusée
test('texture : hors liste ou en majuscules est refusée', () => {
  assert.equal(verifierObservation(saisieValide({ texture: 'caillouteux' }), []).length, 1);
  assert.equal(verifierObservation(saisieValide({ texture: 'LIMONEUX' }), []).length, 1);
});




