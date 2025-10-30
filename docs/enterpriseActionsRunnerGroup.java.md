# `enterpriseActionsRunnerGroup` Submodule <a name="`enterpriseActionsRunnerGroup` Submodule" id="@cdktf/provider-github.enterpriseActionsRunnerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseActionsRunnerGroup <a name="EnterpriseActionsRunnerGroup" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group github_enterprise_actions_runner_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.enterprise_actions_runner_group.EnterpriseActionsRunnerGroup;

EnterpriseActionsRunnerGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enterpriseSlug(java.lang.String)
    .name(java.lang.String)
    .visibility(java.lang.String)
//  .allowsPublicRepositories(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .restrictedToWorkflows(java.lang.Boolean|IResolvable)
//  .selectedOrganizationIds(java.util.List<java.lang.Number>)
//  .selectedWorkflows(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.enterpriseSlug">enterpriseSlug</a></code> | <code>java.lang.String</code> | The slug of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.visibility">visibility</a></code> | <code>java.lang.String</code> | The visibility of the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.allowsPublicRepositories">allowsPublicRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether public repositories can be added to the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#id EnterpriseActionsRunnerGroup#id}. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.restrictedToWorkflows">restrictedToWorkflows</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.selectedOrganizationIds">selectedOrganizationIds</a></code> | <code>java.util.List<java.lang.Number></code> | List of organization IDs that can access the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.selectedWorkflows">selectedWorkflows</a></code> | <code>java.util.List<java.lang.String></code> | List of workflows the runner group should be allowed to run. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enterpriseSlug`<sup>Required</sup> <a name="enterpriseSlug" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.enterpriseSlug"></a>

- *Type:* java.lang.String

The slug of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#enterprise_slug EnterpriseActionsRunnerGroup#enterprise_slug}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#name EnterpriseActionsRunnerGroup#name}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.visibility"></a>

- *Type:* java.lang.String

The visibility of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#visibility EnterpriseActionsRunnerGroup#visibility}

---

##### `allowsPublicRepositories`<sup>Optional</sup> <a name="allowsPublicRepositories" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.allowsPublicRepositories"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether public repositories can be added to the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#allows_public_repositories EnterpriseActionsRunnerGroup#allows_public_repositories}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#id EnterpriseActionsRunnerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restrictedToWorkflows`<sup>Optional</sup> <a name="restrictedToWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.restrictedToWorkflows"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array.

Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#restricted_to_workflows EnterpriseActionsRunnerGroup#restricted_to_workflows}

---

##### `selectedOrganizationIds`<sup>Optional</sup> <a name="selectedOrganizationIds" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.selectedOrganizationIds"></a>

- *Type:* java.util.List<java.lang.Number>

List of organization IDs that can access the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#selected_organization_ids EnterpriseActionsRunnerGroup#selected_organization_ids}

---

##### `selectedWorkflows`<sup>Optional</sup> <a name="selectedWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.selectedWorkflows"></a>

- *Type:* java.util.List<java.lang.String>

List of workflows the runner group should be allowed to run.

This setting will be ignored unless restricted_to_workflows is set to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#selected_workflows EnterpriseActionsRunnerGroup#selected_workflows}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetAllowsPublicRepositories">resetAllowsPublicRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetRestrictedToWorkflows">resetRestrictedToWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedOrganizationIds">resetSelectedOrganizationIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedWorkflows">resetSelectedWorkflows</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowsPublicRepositories` <a name="resetAllowsPublicRepositories" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetAllowsPublicRepositories"></a>

```java
public void resetAllowsPublicRepositories()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetId"></a>

```java
public void resetId()
```

##### `resetRestrictedToWorkflows` <a name="resetRestrictedToWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetRestrictedToWorkflows"></a>

```java
public void resetRestrictedToWorkflows()
```

##### `resetSelectedOrganizationIds` <a name="resetSelectedOrganizationIds" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedOrganizationIds"></a>

```java
public void resetSelectedOrganizationIds()
```

##### `resetSelectedWorkflows` <a name="resetSelectedWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedWorkflows"></a>

```java
public void resetSelectedWorkflows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EnterpriseActionsRunnerGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.enterprise_actions_runner_group.EnterpriseActionsRunnerGroup;

EnterpriseActionsRunnerGroup.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.enterprise_actions_runner_group.EnterpriseActionsRunnerGroup;

EnterpriseActionsRunnerGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.enterprise_actions_runner_group.EnterpriseActionsRunnerGroup;

EnterpriseActionsRunnerGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.enterprise_actions_runner_group.EnterpriseActionsRunnerGroup;

EnterpriseActionsRunnerGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EnterpriseActionsRunnerGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EnterpriseActionsRunnerGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EnterpriseActionsRunnerGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EnterpriseActionsRunnerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseActionsRunnerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.default">default</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.runnersUrl">runnersUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationsUrl">selectedOrganizationsUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositoriesInput">allowsPublicRepositoriesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlugInput">enterpriseSlugInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflowsInput">restrictedToWorkflowsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIdsInput">selectedOrganizationIdsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflowsInput">selectedWorkflowsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositories">allowsPublicRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlug">enterpriseSlug</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflows">restrictedToWorkflows</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIds">selectedOrganizationIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflows">selectedWorkflows</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.default"></a>

```java
public IResolvable getDefault();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `runnersUrl`<sup>Required</sup> <a name="runnersUrl" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.runnersUrl"></a>

```java
public java.lang.String getRunnersUrl();
```

- *Type:* java.lang.String

---

##### `selectedOrganizationsUrl`<sup>Required</sup> <a name="selectedOrganizationsUrl" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationsUrl"></a>

```java
public java.lang.String getSelectedOrganizationsUrl();
```

- *Type:* java.lang.String

---

##### `allowsPublicRepositoriesInput`<sup>Optional</sup> <a name="allowsPublicRepositoriesInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositoriesInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowsPublicRepositoriesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enterpriseSlugInput`<sup>Optional</sup> <a name="enterpriseSlugInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlugInput"></a>

```java
public java.lang.String getEnterpriseSlugInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `restrictedToWorkflowsInput`<sup>Optional</sup> <a name="restrictedToWorkflowsInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflowsInput"></a>

```java
public java.lang.Boolean|IResolvable getRestrictedToWorkflowsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `selectedOrganizationIdsInput`<sup>Optional</sup> <a name="selectedOrganizationIdsInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIdsInput"></a>

```java
public java.util.List<java.lang.Number> getSelectedOrganizationIdsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `selectedWorkflowsInput`<sup>Optional</sup> <a name="selectedWorkflowsInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflowsInput"></a>

```java
public java.util.List<java.lang.String> getSelectedWorkflowsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `allowsPublicRepositories`<sup>Required</sup> <a name="allowsPublicRepositories" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositories"></a>

```java
public java.lang.Boolean|IResolvable getAllowsPublicRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enterpriseSlug`<sup>Required</sup> <a name="enterpriseSlug" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlug"></a>

```java
public java.lang.String getEnterpriseSlug();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `restrictedToWorkflows`<sup>Required</sup> <a name="restrictedToWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflows"></a>

```java
public java.lang.Boolean|IResolvable getRestrictedToWorkflows();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `selectedOrganizationIds`<sup>Required</sup> <a name="selectedOrganizationIds" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIds"></a>

```java
public java.util.List<java.lang.Number> getSelectedOrganizationIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `selectedWorkflows`<sup>Required</sup> <a name="selectedWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflows"></a>

```java
public java.util.List<java.lang.String> getSelectedWorkflows();
```

- *Type:* java.util.List<java.lang.String>

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseActionsRunnerGroupConfig <a name="EnterpriseActionsRunnerGroupConfig" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.enterprise_actions_runner_group.EnterpriseActionsRunnerGroupConfig;

EnterpriseActionsRunnerGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enterpriseSlug(java.lang.String)
    .name(java.lang.String)
    .visibility(java.lang.String)
//  .allowsPublicRepositories(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .restrictedToWorkflows(java.lang.Boolean|IResolvable)
//  .selectedOrganizationIds(java.util.List<java.lang.Number>)
//  .selectedWorkflows(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.enterpriseSlug">enterpriseSlug</a></code> | <code>java.lang.String</code> | The slug of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | The visibility of the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.allowsPublicRepositories">allowsPublicRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether public repositories can be added to the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#id EnterpriseActionsRunnerGroup#id}. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.restrictedToWorkflows">restrictedToWorkflows</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedOrganizationIds">selectedOrganizationIds</a></code> | <code>java.util.List<java.lang.Number></code> | List of organization IDs that can access the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedWorkflows">selectedWorkflows</a></code> | <code>java.util.List<java.lang.String></code> | List of workflows the runner group should be allowed to run. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enterpriseSlug`<sup>Required</sup> <a name="enterpriseSlug" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.enterpriseSlug"></a>

```java
public java.lang.String getEnterpriseSlug();
```

- *Type:* java.lang.String

The slug of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#enterprise_slug EnterpriseActionsRunnerGroup#enterprise_slug}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#name EnterpriseActionsRunnerGroup#name}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

The visibility of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#visibility EnterpriseActionsRunnerGroup#visibility}

---

##### `allowsPublicRepositories`<sup>Optional</sup> <a name="allowsPublicRepositories" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.allowsPublicRepositories"></a>

```java
public java.lang.Boolean|IResolvable getAllowsPublicRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether public repositories can be added to the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#allows_public_repositories EnterpriseActionsRunnerGroup#allows_public_repositories}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#id EnterpriseActionsRunnerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restrictedToWorkflows`<sup>Optional</sup> <a name="restrictedToWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.restrictedToWorkflows"></a>

```java
public java.lang.Boolean|IResolvable getRestrictedToWorkflows();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array.

Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#restricted_to_workflows EnterpriseActionsRunnerGroup#restricted_to_workflows}

---

##### `selectedOrganizationIds`<sup>Optional</sup> <a name="selectedOrganizationIds" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedOrganizationIds"></a>

```java
public java.util.List<java.lang.Number> getSelectedOrganizationIds();
```

- *Type:* java.util.List<java.lang.Number>

List of organization IDs that can access the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#selected_organization_ids EnterpriseActionsRunnerGroup#selected_organization_ids}

---

##### `selectedWorkflows`<sup>Optional</sup> <a name="selectedWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedWorkflows"></a>

```java
public java.util.List<java.lang.String> getSelectedWorkflows();
```

- *Type:* java.util.List<java.lang.String>

List of workflows the runner group should be allowed to run.

This setting will be ignored unless restricted_to_workflows is set to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/enterprise_actions_runner_group#selected_workflows EnterpriseActionsRunnerGroup#selected_workflows}

---



