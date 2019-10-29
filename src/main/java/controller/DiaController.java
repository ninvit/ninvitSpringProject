package controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import exception.ResourceNotFoundException;
import model.Dia;
import repository.DiaRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class DiaController {
	@Autowired
	private DiaRepository DiaRepository;

	@GetMapping("/Dias")
	public List<Dia> getAllDias() {
		return DiaRepository.findAll();
	}

	@GetMapping("/Dias/{id}")
	public ResponseEntity<Dia> getDiaById(@PathVariable(value = "id") Long DiaId)
			throws ResourceNotFoundException {
		Dia Dia = DiaRepository.findById(DiaId)
				.orElseThrow(() -> new ResourceNotFoundException("Dia not found for this id :: " + DiaId));
		return ResponseEntity.ok().body(Dia);
	}

	@PostMapping("/Dias")
	public Dia createDia(@Valid @RequestBody Dia Dia) {
		
		return DiaRepository.save(Dia);
	}

	@PutMapping("/Dias/{id}")
	public ResponseEntity<Dia> updateDia(@PathVariable(value = "id") Long DiaId,
			@Valid @RequestBody Dia DiaDetails) throws ResourceNotFoundException {
		Dia Dia = DiaRepository.findById(DiaId)
				.orElseThrow(() -> new ResourceNotFoundException("Dia not found for this id :: " + DiaId));

		Dia.setEntrada(DiaDetails.getEntrada());
		Dia.setAlmoco(DiaDetails.getAlmoco());
		Dia.setRetornoAlmoco(DiaDetails.getRetornoAlmoco());
		Dia.setSaida(DiaDetails.getSaida());
		final Dia updatedDia = DiaRepository.save(Dia);
		return ResponseEntity.ok(updatedDia);
	}

	@DeleteMapping("/Dias/{id}")
	public Map<String, Boolean> deleteDia(@PathVariable(value = "id") Long DiaId)
			throws ResourceNotFoundException {
		Dia Dia = DiaRepository.findById(DiaId)
				.orElseThrow(() -> new ResourceNotFoundException("Dia not found for this id :: " + DiaId));

		DiaRepository.delete(Dia);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
