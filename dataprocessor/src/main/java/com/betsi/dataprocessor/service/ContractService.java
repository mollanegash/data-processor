package com.betsi.dataprocessor.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.betsi.dataprocessor.model.Contract;
import com.betsi.dataprocessor.repository.ContractRepository;



@Service
public class ContractService {

    @Autowired
    private ContractRepository contractRepository;
   
   
    

    public List<Contract> searchContracts(String keyword) {
        return contractRepository.searchByTitle(keyword);
    }

    public List<Contract> getAllContracts() {
        return contractRepository.findAll();
    }
    
    

    public List<Contract> getContracts(String naics, String sortOrder) {
        List<Contract> contracts;

        if (naics != null && !naics.isEmpty()) {
            contracts = contractRepository.filterByNaics(naics);
        } else {
            contracts = contractRepository.findAll(); // Return all if no filter is applied
        }

        if ("titleAsc".equals(sortOrder)) {
            contracts.sort((c1, c2) -> c1.getTitle().compareToIgnoreCase(c2.getTitle()));
        } else if ("titleDesc".equals(sortOrder)) {
            contracts.sort((c1, c2) -> c2.getTitle().compareToIgnoreCase(c1.getTitle()));
        }

        return contracts;
    }
    
    public List<Contract> filterContractsByNaics(String naics) {
        return contractRepository.filterByNaics(naics);
    }

    public List<Contract> getSortedContracts(String sortOrder) {
        if ("desc".equalsIgnoreCase(sortOrder)) {
            return contractRepository.findAllByOrderByTitleDesc();
        } else {
            return contractRepository.findAllByOrderByTitleAsc();
        }
    }

    public Contract saveContract(Contract contract) {
        return contractRepository.save(contract);
    }

    public void saveAllContracts(List<Contract> contracts) {
        contractRepository.saveAll(contracts);
    }
}
