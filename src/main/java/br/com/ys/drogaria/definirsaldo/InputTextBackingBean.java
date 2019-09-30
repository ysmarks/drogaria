package br.com.ys.drogaria.definirsaldo;

import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.RequestScoped;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.event.PhaseId;
import javax.faces.event.ValueChangeEvent;
import javax.faces.validator.ValidatorException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@ManagedBean
@RequestScoped
public class InputTextBackingBean {
 
	private static final Logger logger = LoggerFactory.getLogger(InputTextBackingBean.class);
 
	@ManagedProperty(value = "#{inputTextModelBean}")
	private InputTextModelBean inputTextModelBean;
 
	public void emailAddressValidator(FacesContext facesContext, UIComponent uiComponent, Object value)
		throws ValidatorException {
 
		if (value != null) {
 
			if (!value.toString().matches(".+[@].+[.].+")) {
				FacesMessage facesMessage = new FacesMessage();
				facesMessage.setSeverity(FacesMessage.SEVERITY_ERROR);
				throw new ValidatorException(facesMessage);
			}
		}
	}
 
	public void setInputTextModelBean(InputTextModelBean inputTextModelBean) {
		this.inputTextModelBean = inputTextModelBean;
	}
 
	public void submit() {
 
		Object value = inputTextModelBean.getText();
 
		if (value == null) {
			value = inputTextModelBean.getDate();
		}
 
		logger.info("You entered: " + value);
	}
 
	public void valueChangeListener(ValueChangeEvent valueChangeEvent) {
 
		FacesContext facesContext = FacesContext.getCurrentInstance();
		PhaseId phaseId = facesContext.getCurrentPhaseId();
		logger.debug("valueChangeListener: phaseId=[{0}]", phaseId.toString());
 
		String phaseName = phaseId.toString();
		FacesMessage facesMessage = new FacesMessage("The valueChangeListener method was called during the " +
				phaseName + " phase of the JSF lifecycle.");
		facesContext.addMessage(null, facesMessage);
	}
}
