package com.betsi.dataprocessor.controller;

import com.betsi.dataprocessor.model.Contract;
import com.betsi.dataprocessor.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import java.util.List;

@RestController
@RequestMapping("/api/contracts")
@CrossOrigin(origins = "http://localhost:3000")  // Adjust the origin as needed
public class ContractController {

    @Autowired
    private ContractService contractService;

    @GetMapping("/search")
    public List<Contract> searchContracts(@RequestParam String keyword) {
        return contractService.searchContracts(keyword);
    }

    @GetMapping("/filter")
    public List<Contract> filterContracts(@RequestParam(required = false) String naics,
                                          @RequestParam(required = false, defaultValue = "titleAsc") String sortOrder) {
        return contractService.getContracts(naics, sortOrder);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createContract(@RequestBody Contract contract) {
        Contract savedContract = contractService.saveContract(contract);
        return ResponseEntity.ok(savedContract);
    }

    @GetMapping("/download")
    public ResponseEntity<byte[]> downloadCSV() {
        List<Contract> contracts = contractService.getAllContracts();

        String csvContent = convertToCsv(contracts);
        byte[] output = csvContent.getBytes();

        HttpHeaders headers = new HttpHeaders();
        headers.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=contracts.csv");
        headers.setContentType(MediaType.TEXT_PLAIN);

        return ResponseEntity.ok().headers(headers).body(output);
    }

    private String convertToCsv(List<Contract> contracts) {
        StringBuilder sb = new StringBuilder();
        sb.append("Title,Description,AnticipatedAcquisitionStrategy,PrimaryNaics,TotalContractRange,TargetSolicitationMonthYear,TargetAwardMonthYear,OperatingDivision,ProgramOfficePocFirstName,ProgramOfficePocLastName,ProgramOfficePocEmail,ProgramPocOffice,ContractingOffice\n");

        for (Contract contract : contracts) {
            sb.append(contract.getTitle()).append(",")
                    .append(contract.getDescription()).append(",")
                    .append(contract.getAnticipatedAcquisitionStrategy()).append(",")
                    .append(contract.getPrimaryNaics()).append(",")
                    .append(contract.getTotalContractRange()).append(",")
                    .append(contract.getTargetSolicitationMonthYear()).append(",")
                    .append(contract.getTargetAwardMonthYear()).append(",")
                    .append(contract.getOperatingDivision()).append(",")
                    .append(contract.getProgramOfficePocFirstName()).append(",")
                    .append(contract.getProgramOfficePocLastName()).append(",")
                    .append(contract.getProgramOfficePocEmail()).append(",")
                    .append(contract.getProgramPocOffice()).append(",")
                    .append(contract.getContractingOffice()).append("\n");
        }
        return sb.toString();
    }

    @GetMapping
    public List<Contract> getAllContracts() {
        return contractService.getAllContracts();
    }
}
