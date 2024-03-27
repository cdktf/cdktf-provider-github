# `teamSyncGroupMapping` Submodule <a name="`teamSyncGroupMapping` Submodule" id="@cdktf/provider-github.teamSyncGroupMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamSyncGroupMapping <a name="TeamSyncGroupMapping" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping github_team_sync_group_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.team_sync_group_mapping.TeamSyncGroupMapping;

TeamSyncGroupMapping.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .teamSlug(java.lang.String)
//  .group(IResolvable)
//  .group(java.util.List<TeamSyncGroupMappingGroup>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.teamSlug">teamSlug</a></code> | <code>java.lang.String</code> | Slug of the team. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.group">group</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>></code> | group block. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#id TeamSyncGroupMapping#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `teamSlug`<sup>Required</sup> <a name="teamSlug" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.teamSlug"></a>

- *Type:* java.lang.String

Slug of the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#team_slug TeamSyncGroupMapping#team_slug}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.group"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>>

group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#group TeamSyncGroupMapping#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#id TeamSyncGroupMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.putGroup">putGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGroup` <a name="putGroup" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.putGroup"></a>

```java
public void putGroup(IResolvable OR java.util.List<TeamSyncGroupMappingGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.putGroup.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>>

---

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TeamSyncGroupMapping resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.team_sync_group_mapping.TeamSyncGroupMapping;

TeamSyncGroupMapping.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.team_sync_group_mapping.TeamSyncGroupMapping;

TeamSyncGroupMapping.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.team_sync_group_mapping.TeamSyncGroupMapping;

TeamSyncGroupMapping.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.team_sync_group_mapping.TeamSyncGroupMapping;

TeamSyncGroupMapping.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TeamSyncGroupMapping.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TeamSyncGroupMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TeamSyncGroupMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TeamSyncGroupMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TeamSyncGroupMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.group">group</a></code> | <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList">TeamSyncGroupMappingGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.groupInput">groupInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.teamSlugInput">teamSlugInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.teamSlug">teamSlug</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.group"></a>

```java
public TeamSyncGroupMappingGroupList getGroup();
```

- *Type:* <a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList">TeamSyncGroupMappingGroupList</a>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.groupInput"></a>

```java
public java.lang.Object getGroupInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `teamSlugInput`<sup>Optional</sup> <a name="teamSlugInput" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.teamSlugInput"></a>

```java
public java.lang.String getTeamSlugInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `teamSlug`<sup>Required</sup> <a name="teamSlug" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.teamSlug"></a>

```java
public java.lang.String getTeamSlug();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TeamSyncGroupMappingConfig <a name="TeamSyncGroupMappingConfig" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.team_sync_group_mapping.TeamSyncGroupMappingConfig;

TeamSyncGroupMappingConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .teamSlug(java.lang.String)
//  .group(IResolvable)
//  .group(java.util.List<TeamSyncGroupMappingGroup>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.teamSlug">teamSlug</a></code> | <code>java.lang.String</code> | Slug of the team. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.group">group</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>></code> | group block. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#id TeamSyncGroupMapping#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `teamSlug`<sup>Required</sup> <a name="teamSlug" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.teamSlug"></a>

```java
public java.lang.String getTeamSlug();
```

- *Type:* java.lang.String

Slug of the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#team_slug TeamSyncGroupMapping#team_slug}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.group"></a>

```java
public java.lang.Object getGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>>

group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#group TeamSyncGroupMapping#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#id TeamSyncGroupMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TeamSyncGroupMappingGroup <a name="TeamSyncGroupMappingGroup" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.team_sync_group_mapping.TeamSyncGroupMappingGroup;

TeamSyncGroupMappingGroup.builder()
    .groupDescription(java.lang.String)
    .groupId(java.lang.String)
    .groupName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupDescription">groupDescription</a></code> | <code>java.lang.String</code> | The description of the IdP group. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupId">groupId</a></code> | <code>java.lang.String</code> | The ID of the IdP group. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupName">groupName</a></code> | <code>java.lang.String</code> | The name of the IdP group. |

---

##### `groupDescription`<sup>Required</sup> <a name="groupDescription" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupDescription"></a>

```java
public java.lang.String getGroupDescription();
```

- *Type:* java.lang.String

The description of the IdP group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#group_description TeamSyncGroupMapping#group_description}

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

The ID of the IdP group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#group_id TeamSyncGroupMapping#group_id}

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

The name of the IdP group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/team_sync_group_mapping#group_name TeamSyncGroupMapping#group_name}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamSyncGroupMappingGroupList <a name="TeamSyncGroupMappingGroupList" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.team_sync_group_mapping.TeamSyncGroupMappingGroupList;

new TeamSyncGroupMappingGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.get"></a>

```java
public TeamSyncGroupMappingGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>>

---


### TeamSyncGroupMappingGroupOutputReference <a name="TeamSyncGroupMappingGroupOutputReference" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.team_sync_group_mapping.TeamSyncGroupMappingGroupOutputReference;

new TeamSyncGroupMappingGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupDescriptionInput">groupDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupDescription">groupDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupDescriptionInput`<sup>Optional</sup> <a name="groupDescriptionInput" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupDescriptionInput"></a>

```java
public java.lang.String getGroupDescriptionInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `groupDescription`<sup>Required</sup> <a name="groupDescription" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupDescription"></a>

```java
public java.lang.String getGroupDescription();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>

---



