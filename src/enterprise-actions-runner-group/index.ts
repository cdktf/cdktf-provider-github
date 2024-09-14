/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnterpriseActionsRunnerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether public repositories can be added to the runner group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#allows_public_repositories EnterpriseActionsRunnerGroup#allows_public_repositories}
  */
  readonly allowsPublicRepositories?: boolean | cdktf.IResolvable;
  /**
  * The slug of the enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#enterprise_slug EnterpriseActionsRunnerGroup#enterprise_slug}
  */
  readonly enterpriseSlug: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#id EnterpriseActionsRunnerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the runner group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#name EnterpriseActionsRunnerGroup#name}
  */
  readonly name: string;
  /**
  * If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array. Defaults to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#restricted_to_workflows EnterpriseActionsRunnerGroup#restricted_to_workflows}
  */
  readonly restrictedToWorkflows?: boolean | cdktf.IResolvable;
  /**
  * List of organization IDs that can access the runner group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#selected_organization_ids EnterpriseActionsRunnerGroup#selected_organization_ids}
  */
  readonly selectedOrganizationIds?: number[];
  /**
  * List of workflows the runner group should be allowed to run. This setting will be ignored unless restricted_to_workflows is set to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#selected_workflows EnterpriseActionsRunnerGroup#selected_workflows}
  */
  readonly selectedWorkflows?: string[];
  /**
  * The visibility of the runner group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#visibility EnterpriseActionsRunnerGroup#visibility}
  */
  readonly visibility: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group github_enterprise_actions_runner_group}
*/
export class EnterpriseActionsRunnerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_enterprise_actions_runner_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnterpriseActionsRunnerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnterpriseActionsRunnerGroup to import
  * @param importFromId The id of the existing EnterpriseActionsRunnerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnterpriseActionsRunnerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_enterprise_actions_runner_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group github_enterprise_actions_runner_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnterpriseActionsRunnerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: EnterpriseActionsRunnerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'github_enterprise_actions_runner_group',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.3.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowsPublicRepositories = config.allowsPublicRepositories;
    this._enterpriseSlug = config.enterpriseSlug;
    this._id = config.id;
    this._name = config.name;
    this._restrictedToWorkflows = config.restrictedToWorkflows;
    this._selectedOrganizationIds = config.selectedOrganizationIds;
    this._selectedWorkflows = config.selectedWorkflows;
    this._visibility = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allows_public_repositories - computed: false, optional: true, required: false
  private _allowsPublicRepositories?: boolean | cdktf.IResolvable; 
  public get allowsPublicRepositories() {
    return this.getBooleanAttribute('allows_public_repositories');
  }
  public set allowsPublicRepositories(value: boolean | cdktf.IResolvable) {
    this._allowsPublicRepositories = value;
  }
  public resetAllowsPublicRepositories() {
    this._allowsPublicRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowsPublicRepositoriesInput() {
    return this._allowsPublicRepositories;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // enterprise_slug - computed: false, optional: false, required: true
  private _enterpriseSlug?: string; 
  public get enterpriseSlug() {
    return this.getStringAttribute('enterprise_slug');
  }
  public set enterpriseSlug(value: string) {
    this._enterpriseSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseSlugInput() {
    return this._enterpriseSlug;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // restricted_to_workflows - computed: false, optional: true, required: false
  private _restrictedToWorkflows?: boolean | cdktf.IResolvable; 
  public get restrictedToWorkflows() {
    return this.getBooleanAttribute('restricted_to_workflows');
  }
  public set restrictedToWorkflows(value: boolean | cdktf.IResolvable) {
    this._restrictedToWorkflows = value;
  }
  public resetRestrictedToWorkflows() {
    this._restrictedToWorkflows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedToWorkflowsInput() {
    return this._restrictedToWorkflows;
  }

  // runners_url - computed: true, optional: false, required: false
  public get runnersUrl() {
    return this.getStringAttribute('runners_url');
  }

  // selected_organization_ids - computed: false, optional: true, required: false
  private _selectedOrganizationIds?: number[]; 
  public get selectedOrganizationIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('selected_organization_ids')));
  }
  public set selectedOrganizationIds(value: number[]) {
    this._selectedOrganizationIds = value;
  }
  public resetSelectedOrganizationIds() {
    this._selectedOrganizationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedOrganizationIdsInput() {
    return this._selectedOrganizationIds;
  }

  // selected_organizations_url - computed: true, optional: false, required: false
  public get selectedOrganizationsUrl() {
    return this.getStringAttribute('selected_organizations_url');
  }

  // selected_workflows - computed: false, optional: true, required: false
  private _selectedWorkflows?: string[]; 
  public get selectedWorkflows() {
    return this.getListAttribute('selected_workflows');
  }
  public set selectedWorkflows(value: string[]) {
    this._selectedWorkflows = value;
  }
  public resetSelectedWorkflows() {
    this._selectedWorkflows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedWorkflowsInput() {
    return this._selectedWorkflows;
  }

  // visibility - computed: false, optional: false, required: true
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allows_public_repositories: cdktf.booleanToTerraform(this._allowsPublicRepositories),
      enterprise_slug: cdktf.stringToTerraform(this._enterpriseSlug),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      restricted_to_workflows: cdktf.booleanToTerraform(this._restrictedToWorkflows),
      selected_organization_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._selectedOrganizationIds),
      selected_workflows: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedWorkflows),
      visibility: cdktf.stringToTerraform(this._visibility),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allows_public_repositories: {
        value: cdktf.booleanToHclTerraform(this._allowsPublicRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enterprise_slug: {
        value: cdktf.stringToHclTerraform(this._enterpriseSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restricted_to_workflows: {
        value: cdktf.booleanToHclTerraform(this._restrictedToWorkflows),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      selected_organization_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._selectedOrganizationIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      selected_workflows: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selectedWorkflows),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
