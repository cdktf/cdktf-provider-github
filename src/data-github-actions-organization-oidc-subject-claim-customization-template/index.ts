// https://www.terraform.io/docs/providers/github/d/actions_organization_oidc_subject_claim_customization_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/actions_organization_oidc_subject_claim_customization_template#id DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/actions_organization_oidc_subject_claim_customization_template github_actions_organization_oidc_subject_claim_customization_template}
*/
export class DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_actions_organization_oidc_subject_claim_customization_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/d/actions_organization_oidc_subject_claim_customization_template github_actions_organization_oidc_subject_claim_customization_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'github_actions_organization_oidc_subject_claim_customization_template',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.15.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include_claim_keys - computed: true, optional: false, required: false
  public get includeClaimKeys() {
    return this.getListAttribute('include_claim_keys');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
