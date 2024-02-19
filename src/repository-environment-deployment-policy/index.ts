/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_environment_deployment_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryEnvironmentDeploymentPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name pattern that branches must match in order to deploy to the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_environment_deployment_policy#branch_pattern RepositoryEnvironmentDeploymentPolicy#branch_pattern}
  */
  readonly branchPattern: string;
  /**
  * The name of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_environment_deployment_policy#environment RepositoryEnvironmentDeploymentPolicy#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_environment_deployment_policy#id RepositoryEnvironmentDeploymentPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the repository. The name is not case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_environment_deployment_policy#repository RepositoryEnvironmentDeploymentPolicy#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_environment_deployment_policy github_repository_environment_deployment_policy}
*/
export class RepositoryEnvironmentDeploymentPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_environment_deployment_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryEnvironmentDeploymentPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryEnvironmentDeploymentPolicy to import
  * @param importFromId The id of the existing RepositoryEnvironmentDeploymentPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_environment_deployment_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryEnvironmentDeploymentPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_environment_deployment_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_environment_deployment_policy github_repository_environment_deployment_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryEnvironmentDeploymentPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryEnvironmentDeploymentPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_environment_deployment_policy',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.0.0',
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
    this._branchPattern = config.branchPattern;
    this._environment = config.environment;
    this._id = config.id;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch_pattern - computed: false, optional: false, required: true
  private _branchPattern?: string; 
  public get branchPattern() {
    return this.getStringAttribute('branch_pattern');
  }
  public set branchPattern(value: string) {
    this._branchPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchPatternInput() {
    return this._branchPattern;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch_pattern: cdktf.stringToTerraform(this._branchPattern),
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branch_pattern: {
        value: cdktf.stringToHclTerraform(this._branchPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
