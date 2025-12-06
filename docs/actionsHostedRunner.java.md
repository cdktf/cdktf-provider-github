# `actionsHostedRunner` Submodule <a name="`actionsHostedRunner` Submodule" id="@cdktf/provider-github.actionsHostedRunner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsHostedRunner <a name="ActionsHostedRunner" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner github_actions_hosted_runner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_hosted_runner.ActionsHostedRunner;

ActionsHostedRunner.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .image(ActionsHostedRunnerImage)
    .name(java.lang.String)
    .runnerGroupId(java.lang.Number)
    .size(java.lang.String)
//  .imageGen(java.lang.Boolean|IResolvable)
//  .imageVersion(java.lang.String)
//  .maximumRunners(java.lang.Number)
//  .publicIpEnabled(java.lang.Boolean|IResolvable)
//  .timeouts(ActionsHostedRunnerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.image">image</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a></code> | image block. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the hosted runner. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.runnerGroupId">runnerGroupId</a></code> | <code>java.lang.Number</code> | The runner group ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.size">size</a></code> | <code>java.lang.String</code> | Machine size (e.g., '4-core', '8-core'). Can be updated to scale the runner. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.imageGen">imageGen</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether this runner should be used to generate custom images. Cannot be changed after creation. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.imageVersion">imageVersion</a></code> | <code>java.lang.String</code> | The version of the runner image to deploy. This is relevant only for runners using custom images. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.maximumRunners">maximumRunners</a></code> | <code>java.lang.Number</code> | Maximum number of runners to scale up to. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.publicIpEnabled">publicIpEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to enable static public IP. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.image"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image ActionsHostedRunner#image}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the hosted runner.

Must be between 1 and 64 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#name ActionsHostedRunner#name}

---

##### `runnerGroupId`<sup>Required</sup> <a name="runnerGroupId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.runnerGroupId"></a>

- *Type:* java.lang.Number

The runner group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#runner_group_id ActionsHostedRunner#runner_group_id}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.size"></a>

- *Type:* java.lang.String

Machine size (e.g., '4-core', '8-core'). Can be updated to scale the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#size ActionsHostedRunner#size}

---

##### `imageGen`<sup>Optional</sup> <a name="imageGen" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.imageGen"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether this runner should be used to generate custom images. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image_gen ActionsHostedRunner#image_gen}

---

##### `imageVersion`<sup>Optional</sup> <a name="imageVersion" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.imageVersion"></a>

- *Type:* java.lang.String

The version of the runner image to deploy. This is relevant only for runners using custom images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image_version ActionsHostedRunner#image_version}

---

##### `maximumRunners`<sup>Optional</sup> <a name="maximumRunners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.maximumRunners"></a>

- *Type:* java.lang.Number

Maximum number of runners to scale up to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#maximum_runners ActionsHostedRunner#maximum_runners}

---

##### `publicIpEnabled`<sup>Optional</sup> <a name="publicIpEnabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.publicIpEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to enable static public IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#public_ip_enabled ActionsHostedRunner#public_ip_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#timeouts ActionsHostedRunner#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putImage">putImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageGen">resetImageGen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageVersion">resetImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetMaximumRunners">resetMaximumRunners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetPublicIpEnabled">resetPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putImage` <a name="putImage" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putImage"></a>

```java
public void putImage(ActionsHostedRunnerImage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putTimeouts"></a>

```java
public void putTimeouts(ActionsHostedRunnerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

---

##### `resetImageGen` <a name="resetImageGen" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageGen"></a>

```java
public void resetImageGen()
```

##### `resetImageVersion` <a name="resetImageVersion" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageVersion"></a>

```java
public void resetImageVersion()
```

##### `resetMaximumRunners` <a name="resetMaximumRunners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetMaximumRunners"></a>

```java
public void resetMaximumRunners()
```

##### `resetPublicIpEnabled` <a name="resetPublicIpEnabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetPublicIpEnabled"></a>

```java
public void resetPublicIpEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ActionsHostedRunner resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_hosted_runner.ActionsHostedRunner;

ActionsHostedRunner.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_hosted_runner.ActionsHostedRunner;

ActionsHostedRunner.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_hosted_runner.ActionsHostedRunner;

ActionsHostedRunner.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_hosted_runner.ActionsHostedRunner;

ActionsHostedRunner.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ActionsHostedRunner.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ActionsHostedRunner resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ActionsHostedRunner to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ActionsHostedRunner that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ActionsHostedRunner to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.image">image</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference">ActionsHostedRunnerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lastActiveOn">lastActiveOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.machineSizeDetails">machineSizeDetails</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList">ActionsHostedRunnerMachineSizeDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIps">publicIps</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList">ActionsHostedRunnerPublicIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference">ActionsHostedRunnerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGenInput">imageGenInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageInput">imageInput</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersionInput">imageVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunnersInput">maximumRunnersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabledInput">publicIpEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupIdInput">runnerGroupIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.sizeInput">sizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGen">imageGen</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersion">imageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunners">maximumRunners</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabled">publicIpEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupId">runnerGroupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.size">size</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.image"></a>

```java
public ActionsHostedRunnerImageOutputReference getImage();
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference">ActionsHostedRunnerImageOutputReference</a>

---

##### `lastActiveOn`<sup>Required</sup> <a name="lastActiveOn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lastActiveOn"></a>

```java
public java.lang.String getLastActiveOn();
```

- *Type:* java.lang.String

---

##### `machineSizeDetails`<sup>Required</sup> <a name="machineSizeDetails" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.machineSizeDetails"></a>

```java
public ActionsHostedRunnerMachineSizeDetailsList getMachineSizeDetails();
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList">ActionsHostedRunnerMachineSizeDetailsList</a>

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `publicIps`<sup>Required</sup> <a name="publicIps" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIps"></a>

```java
public ActionsHostedRunnerPublicIpsList getPublicIps();
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList">ActionsHostedRunnerPublicIpsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeouts"></a>

```java
public ActionsHostedRunnerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference">ActionsHostedRunnerTimeoutsOutputReference</a>

---

##### `imageGenInput`<sup>Optional</sup> <a name="imageGenInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGenInput"></a>

```java
public java.lang.Boolean|IResolvable getImageGenInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageInput"></a>

```java
public ActionsHostedRunnerImage getImageInput();
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

---

##### `imageVersionInput`<sup>Optional</sup> <a name="imageVersionInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersionInput"></a>

```java
public java.lang.String getImageVersionInput();
```

- *Type:* java.lang.String

---

##### `maximumRunnersInput`<sup>Optional</sup> <a name="maximumRunnersInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunnersInput"></a>

```java
public java.lang.Number getMaximumRunnersInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publicIpEnabledInput`<sup>Optional</sup> <a name="publicIpEnabledInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPublicIpEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runnerGroupIdInput`<sup>Optional</sup> <a name="runnerGroupIdInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupIdInput"></a>

```java
public java.lang.Number getRunnerGroupIdInput();
```

- *Type:* java.lang.Number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.sizeInput"></a>

```java
public java.lang.String getSizeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeoutsInput"></a>

```java
public IResolvable|ActionsHostedRunnerTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

---

##### `imageGen`<sup>Required</sup> <a name="imageGen" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGen"></a>

```java
public java.lang.Boolean|IResolvable getImageGen();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersion"></a>

```java
public java.lang.String getImageVersion();
```

- *Type:* java.lang.String

---

##### `maximumRunners`<sup>Required</sup> <a name="maximumRunners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunners"></a>

```java
public java.lang.Number getMaximumRunners();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicIpEnabled`<sup>Required</sup> <a name="publicIpEnabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublicIpEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runnerGroupId`<sup>Required</sup> <a name="runnerGroupId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupId"></a>

```java
public java.lang.Number getRunnerGroupId();
```

- *Type:* java.lang.Number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsHostedRunnerConfig <a name="ActionsHostedRunnerConfig" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_hosted_runner.ActionsHostedRunnerConfig;

ActionsHostedRunnerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .image(ActionsHostedRunnerImage)
    .name(java.lang.String)
    .runnerGroupId(java.lang.Number)
    .size(java.lang.String)
//  .imageGen(java.lang.Boolean|IResolvable)
//  .imageVersion(java.lang.String)
//  .maximumRunners(java.lang.Number)
//  .publicIpEnabled(java.lang.Boolean|IResolvable)
//  .timeouts(ActionsHostedRunnerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.image">image</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a></code> | image block. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the hosted runner. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.runnerGroupId">runnerGroupId</a></code> | <code>java.lang.Number</code> | The runner group ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.size">size</a></code> | <code>java.lang.String</code> | Machine size (e.g., '4-core', '8-core'). Can be updated to scale the runner. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageGen">imageGen</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether this runner should be used to generate custom images. Cannot be changed after creation. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageVersion">imageVersion</a></code> | <code>java.lang.String</code> | The version of the runner image to deploy. This is relevant only for runners using custom images. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.maximumRunners">maximumRunners</a></code> | <code>java.lang.Number</code> | Maximum number of runners to scale up to. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.publicIpEnabled">publicIpEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to enable static public IP. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.image"></a>

```java
public ActionsHostedRunnerImage getImage();
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image ActionsHostedRunner#image}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the hosted runner.

Must be between 1 and 64 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#name ActionsHostedRunner#name}

---

##### `runnerGroupId`<sup>Required</sup> <a name="runnerGroupId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.runnerGroupId"></a>

```java
public java.lang.Number getRunnerGroupId();
```

- *Type:* java.lang.Number

The runner group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#runner_group_id ActionsHostedRunner#runner_group_id}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

Machine size (e.g., '4-core', '8-core'). Can be updated to scale the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#size ActionsHostedRunner#size}

---

##### `imageGen`<sup>Optional</sup> <a name="imageGen" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageGen"></a>

```java
public java.lang.Boolean|IResolvable getImageGen();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether this runner should be used to generate custom images. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image_gen ActionsHostedRunner#image_gen}

---

##### `imageVersion`<sup>Optional</sup> <a name="imageVersion" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageVersion"></a>

```java
public java.lang.String getImageVersion();
```

- *Type:* java.lang.String

The version of the runner image to deploy. This is relevant only for runners using custom images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image_version ActionsHostedRunner#image_version}

---

##### `maximumRunners`<sup>Optional</sup> <a name="maximumRunners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.maximumRunners"></a>

```java
public java.lang.Number getMaximumRunners();
```

- *Type:* java.lang.Number

Maximum number of runners to scale up to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#maximum_runners ActionsHostedRunner#maximum_runners}

---

##### `publicIpEnabled`<sup>Optional</sup> <a name="publicIpEnabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.publicIpEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublicIpEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to enable static public IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#public_ip_enabled ActionsHostedRunner#public_ip_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.timeouts"></a>

```java
public ActionsHostedRunnerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#timeouts ActionsHostedRunner#timeouts}

---

### ActionsHostedRunnerImage <a name="ActionsHostedRunnerImage" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_hosted_runner.ActionsHostedRunnerImage;

ActionsHostedRunnerImage.builder()
    .id(java.lang.String)
//  .source(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.id">id</a></code> | <code>java.lang.String</code> | The image ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.source">source</a></code> | <code>java.lang.String</code> | The image source (github, partner, or custom). |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The image ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#id ActionsHostedRunner#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The image source (github, partner, or custom).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#source ActionsHostedRunner#source}

---

### ActionsHostedRunnerMachineSizeDetails <a name="ActionsHostedRunnerMachineSizeDetails" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_hosted_runner.ActionsHostedRunnerMachineSizeDetails;

ActionsHostedRunnerMachineSizeDetails.builder()
    .build();
```


### ActionsHostedRunnerPublicIps <a name="ActionsHostedRunnerPublicIps" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_hosted_runner.ActionsHostedRunnerPublicIps;

ActionsHostedRunnerPublicIps.builder()
    .build();
```


### ActionsHostedRunnerTimeouts <a name="ActionsHostedRunnerTimeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_hosted_runner.ActionsHostedRunnerTimeouts;

ActionsHostedRunnerTimeouts.builder()
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#delete ActionsHostedRunner#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#delete ActionsHostedRunner#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActionsHostedRunnerImageOutputReference <a name="ActionsHostedRunnerImageOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_hosted_runner.ActionsHostedRunnerImageOutputReference;

new ActionsHostedRunnerImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSource` <a name="resetSource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sizeGb">sizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sizeGb"></a>

```java
public java.lang.Number getSizeGb();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.internalValue"></a>

```java
public ActionsHostedRunnerImage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

---


### ActionsHostedRunnerMachineSizeDetailsList <a name="ActionsHostedRunnerMachineSizeDetailsList" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_hosted_runner.ActionsHostedRunnerMachineSizeDetailsList;

new ActionsHostedRunnerMachineSizeDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.get"></a>

```java
public ActionsHostedRunnerMachineSizeDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ActionsHostedRunnerMachineSizeDetailsOutputReference <a name="ActionsHostedRunnerMachineSizeDetailsOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_hosted_runner.ActionsHostedRunnerMachineSizeDetailsOutputReference;

new ActionsHostedRunnerMachineSizeDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.cpuCores">cpuCores</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.memoryGb">memoryGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.storageGb">storageGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails">ActionsHostedRunnerMachineSizeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuCores`<sup>Required</sup> <a name="cpuCores" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.cpuCores"></a>

```java
public java.lang.Number getCpuCores();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.memoryGb"></a>

```java
public java.lang.Number getMemoryGb();
```

- *Type:* java.lang.Number

---

##### `storageGb`<sup>Required</sup> <a name="storageGb" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.storageGb"></a>

```java
public java.lang.Number getStorageGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.internalValue"></a>

```java
public ActionsHostedRunnerMachineSizeDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails">ActionsHostedRunnerMachineSizeDetails</a>

---


### ActionsHostedRunnerPublicIpsList <a name="ActionsHostedRunnerPublicIpsList" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_hosted_runner.ActionsHostedRunnerPublicIpsList;

new ActionsHostedRunnerPublicIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.get"></a>

```java
public ActionsHostedRunnerPublicIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ActionsHostedRunnerPublicIpsOutputReference <a name="ActionsHostedRunnerPublicIpsOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_hosted_runner.ActionsHostedRunnerPublicIpsOutputReference;

new ActionsHostedRunnerPublicIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.length">length</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps">ActionsHostedRunnerPublicIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.internalValue"></a>

```java
public ActionsHostedRunnerPublicIps getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps">ActionsHostedRunnerPublicIps</a>

---


### ActionsHostedRunnerTimeoutsOutputReference <a name="ActionsHostedRunnerTimeoutsOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_hosted_runner.ActionsHostedRunnerTimeoutsOutputReference;

new ActionsHostedRunnerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ActionsHostedRunnerTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

---



