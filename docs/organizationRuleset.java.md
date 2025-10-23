# `organizationRuleset` Submodule <a name="`organizationRuleset` Submodule" id="@cdktf/provider-github.organizationRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationRuleset <a name="OrganizationRuleset" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset github_organization_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRuleset;

OrganizationRuleset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enforcement(java.lang.String)
    .name(java.lang.String)
    .rules(OrganizationRulesetRules)
    .target(java.lang.String)
//  .bypassActors(IResolvable|java.util.List<OrganizationRulesetBypassActors>)
//  .conditions(OrganizationRulesetConditions)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.enforcement">enforcement</a></code> | <code>java.lang.String</code> | Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the ruleset. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.rules">rules</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a></code> | rules block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | Possible values are `branch`, `tag` and `push`. Note: The `push` target is in beta and is subject to change. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.bypassActors">bypassActors</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>></code> | bypass_actors block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#id OrganizationRuleset#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enforcement`<sup>Required</sup> <a name="enforcement" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.enforcement"></a>

- *Type:* java.lang.String

Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#enforcement OrganizationRuleset#enforcement}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.rules"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#rules OrganizationRuleset#rules}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.target"></a>

- *Type:* java.lang.String

Possible values are `branch`, `tag` and `push`. Note: The `push` target is in beta and is subject to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#target OrganizationRuleset#target}

---

##### `bypassActors`<sup>Optional</sup> <a name="bypassActors" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.bypassActors"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>>

bypass_actors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#bypass_actors OrganizationRuleset#bypass_actors}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.conditions"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#conditions OrganizationRuleset#conditions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#id OrganizationRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putBypassActors">putBypassActors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetBypassActors">resetBypassActors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBypassActors` <a name="putBypassActors" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putBypassActors"></a>

```java
public void putBypassActors(IResolvable|java.util.List<OrganizationRulesetBypassActors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putBypassActors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>>

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putConditions"></a>

```java
public void putConditions(OrganizationRulesetConditions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a>

---

##### `putRules` <a name="putRules" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules"></a>

```java
public void putRules(OrganizationRulesetRules value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a>

---

##### `resetBypassActors` <a name="resetBypassActors" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetBypassActors"></a>

```java
public void resetBypassActors()
```

##### `resetConditions` <a name="resetConditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrganizationRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRuleset;

OrganizationRuleset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRuleset;

OrganizationRuleset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRuleset;

OrganizationRuleset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRuleset;

OrganizationRuleset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OrganizationRuleset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OrganizationRuleset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OrganizationRuleset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OrganizationRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.bypassActors">bypassActors</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList">OrganizationRulesetBypassActorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference">OrganizationRulesetConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.nodeId">nodeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference">OrganizationRulesetRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rulesetId">rulesetId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.bypassActorsInput">bypassActorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.conditionsInput">conditionsInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.enforcementInput">enforcementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rulesInput">rulesInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.enforcement">enforcement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bypassActors`<sup>Required</sup> <a name="bypassActors" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.bypassActors"></a>

```java
public OrganizationRulesetBypassActorsList getBypassActors();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList">OrganizationRulesetBypassActorsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.conditions"></a>

```java
public OrganizationRulesetConditionsOutputReference getConditions();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference">OrganizationRulesetConditionsOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.nodeId"></a>

```java
public java.lang.String getNodeId();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rules"></a>

```java
public OrganizationRulesetRulesOutputReference getRules();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference">OrganizationRulesetRulesOutputReference</a>

---

##### `rulesetId`<sup>Required</sup> <a name="rulesetId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rulesetId"></a>

```java
public java.lang.Number getRulesetId();
```

- *Type:* java.lang.Number

---

##### `bypassActorsInput`<sup>Optional</sup> <a name="bypassActorsInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.bypassActorsInput"></a>

```java
public IResolvable|java.util.List<OrganizationRulesetBypassActors> getBypassActorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.conditionsInput"></a>

```java
public OrganizationRulesetConditions getConditionsInput();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a>

---

##### `enforcementInput`<sup>Optional</sup> <a name="enforcementInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.enforcementInput"></a>

```java
public java.lang.String getEnforcementInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rulesInput"></a>

```java
public OrganizationRulesetRules getRulesInput();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `enforcement`<sup>Required</sup> <a name="enforcement" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.enforcement"></a>

```java
public java.lang.String getEnforcement();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationRulesetBypassActors <a name="OrganizationRulesetBypassActors" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetBypassActors;

OrganizationRulesetBypassActors.builder()
    .actorType(java.lang.String)
    .bypassMode(java.lang.String)
//  .actorId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.actorType">actorType</a></code> | <code>java.lang.String</code> | The type of actor that can bypass a ruleset. See https://docs.github.com/en/rest/orgs/rules for more information. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.bypassMode">bypassMode</a></code> | <code>java.lang.String</code> | When the specified actor can bypass the ruleset. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.actorId">actorId</a></code> | <code>java.lang.Number</code> | The ID of the actor that can bypass a ruleset. |

---

##### `actorType`<sup>Required</sup> <a name="actorType" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.actorType"></a>

```java
public java.lang.String getActorType();
```

- *Type:* java.lang.String

The type of actor that can bypass a ruleset. See https://docs.github.com/en/rest/orgs/rules for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#actor_type OrganizationRuleset#actor_type}

---

##### `bypassMode`<sup>Required</sup> <a name="bypassMode" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.bypassMode"></a>

```java
public java.lang.String getBypassMode();
```

- *Type:* java.lang.String

When the specified actor can bypass the ruleset.

pull_request means that an actor can only bypass rules on pull requests. Can be one of: `always`, `pull_request`, `exempt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#bypass_mode OrganizationRuleset#bypass_mode}

---

##### `actorId`<sup>Optional</sup> <a name="actorId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.actorId"></a>

```java
public java.lang.Number getActorId();
```

- *Type:* java.lang.Number

The ID of the actor that can bypass a ruleset.

When `actor_type` is `OrganizationAdmin`, this should be set to `1`. Some resources such as DeployKey do not have an ID and this should be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#actor_id OrganizationRuleset#actor_id}

---

### OrganizationRulesetConditions <a name="OrganizationRulesetConditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetConditions;

OrganizationRulesetConditions.builder()
    .refName(OrganizationRulesetConditionsRefName)
//  .repositoryId(java.util.List<java.lang.Number>)
//  .repositoryName(OrganizationRulesetConditionsRepositoryName)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.refName">refName</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a></code> | ref_name block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.repositoryId">repositoryId</a></code> | <code>java.util.List<java.lang.Number></code> | The repository IDs that the ruleset applies to. One of these IDs must match for the condition to pass. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.repositoryName">repositoryName</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a></code> | repository_name block. |

---

##### `refName`<sup>Required</sup> <a name="refName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.refName"></a>

```java
public OrganizationRulesetConditionsRefName getRefName();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a>

ref_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#ref_name OrganizationRuleset#ref_name}

---

##### `repositoryId`<sup>Optional</sup> <a name="repositoryId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.repositoryId"></a>

```java
public java.util.List<java.lang.Number> getRepositoryId();
```

- *Type:* java.util.List<java.lang.Number>

The repository IDs that the ruleset applies to. One of these IDs must match for the condition to pass.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#repository_id OrganizationRuleset#repository_id}

---

##### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.repositoryName"></a>

```java
public OrganizationRulesetConditionsRepositoryName getRepositoryName();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a>

repository_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#repository_name OrganizationRuleset#repository_name}

---

### OrganizationRulesetConditionsRefName <a name="OrganizationRulesetConditionsRefName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetConditionsRefName;

OrganizationRulesetConditionsRefName.builder()
    .exclude(java.util.List<java.lang.String>)
    .include(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.property.exclude">exclude</a></code> | <code>java.util.List<java.lang.String></code> | Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | Array of ref names or patterns to include. |

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.property.exclude"></a>

```java
public java.util.List<java.lang.String> getExclude();
```

- *Type:* java.util.List<java.lang.String>

Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

Array of ref names or patterns to include.

One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#include OrganizationRuleset#include}

---

### OrganizationRulesetConditionsRepositoryName <a name="OrganizationRulesetConditionsRepositoryName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetConditionsRepositoryName;

OrganizationRulesetConditionsRepositoryName.builder()
    .exclude(java.util.List<java.lang.String>)
    .include(java.util.List<java.lang.String>)
//  .protected(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.exclude">exclude</a></code> | <code>java.util.List<java.lang.String></code> | Array of repository names or patterns to exclude. The condition will not pass if any of these patterns match. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | Array of repository names or patterns to include. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.protected">protected</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether renaming of target repositories is prevented. |

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.exclude"></a>

```java
public java.util.List<java.lang.String> getExclude();
```

- *Type:* java.util.List<java.lang.String>

Array of repository names or patterns to exclude. The condition will not pass if any of these patterns match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

Array of repository names or patterns to include.

One of these patterns must match for the condition to pass. Also accepts `~ALL` to include all repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#include OrganizationRuleset#include}

---

##### `protected`<sup>Optional</sup> <a name="protected" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.protected"></a>

```java
public java.lang.Boolean|IResolvable getProtected();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether renaming of target repositories is prevented.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#protected OrganizationRuleset#protected}

---

### OrganizationRulesetConfig <a name="OrganizationRulesetConfig" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetConfig;

OrganizationRulesetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enforcement(java.lang.String)
    .name(java.lang.String)
    .rules(OrganizationRulesetRules)
    .target(java.lang.String)
//  .bypassActors(IResolvable|java.util.List<OrganizationRulesetBypassActors>)
//  .conditions(OrganizationRulesetConditions)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.enforcement">enforcement</a></code> | <code>java.lang.String</code> | Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the ruleset. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a></code> | rules block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.target">target</a></code> | <code>java.lang.String</code> | Possible values are `branch`, `tag` and `push`. Note: The `push` target is in beta and is subject to change. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.bypassActors">bypassActors</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>></code> | bypass_actors block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#id OrganizationRuleset#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enforcement`<sup>Required</sup> <a name="enforcement" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.enforcement"></a>

```java
public java.lang.String getEnforcement();
```

- *Type:* java.lang.String

Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#enforcement OrganizationRuleset#enforcement}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.rules"></a>

```java
public OrganizationRulesetRules getRules();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#rules OrganizationRuleset#rules}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Possible values are `branch`, `tag` and `push`. Note: The `push` target is in beta and is subject to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#target OrganizationRuleset#target}

---

##### `bypassActors`<sup>Optional</sup> <a name="bypassActors" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.bypassActors"></a>

```java
public IResolvable|java.util.List<OrganizationRulesetBypassActors> getBypassActors();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>>

bypass_actors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#bypass_actors OrganizationRuleset#bypass_actors}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.conditions"></a>

```java
public OrganizationRulesetConditions getConditions();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#conditions OrganizationRuleset#conditions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#id OrganizationRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OrganizationRulesetRules <a name="OrganizationRulesetRules" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRules;

OrganizationRulesetRules.builder()
//  .branchNamePattern(OrganizationRulesetRulesBranchNamePattern)
//  .commitAuthorEmailPattern(OrganizationRulesetRulesCommitAuthorEmailPattern)
//  .commitMessagePattern(OrganizationRulesetRulesCommitMessagePattern)
//  .committerEmailPattern(OrganizationRulesetRulesCommitterEmailPattern)
//  .creation(java.lang.Boolean|IResolvable)
//  .deletion(java.lang.Boolean|IResolvable)
//  .nonFastForward(java.lang.Boolean|IResolvable)
//  .pullRequest(OrganizationRulesetRulesPullRequest)
//  .requiredCodeScanning(OrganizationRulesetRulesRequiredCodeScanning)
//  .requiredLinearHistory(java.lang.Boolean|IResolvable)
//  .requiredSignatures(java.lang.Boolean|IResolvable)
//  .requiredStatusChecks(OrganizationRulesetRulesRequiredStatusChecks)
//  .requiredWorkflows(OrganizationRulesetRulesRequiredWorkflows)
//  .tagNamePattern(OrganizationRulesetRulesTagNamePattern)
//  .update(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.branchNamePattern">branchNamePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a></code> | branch_name_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.commitAuthorEmailPattern">commitAuthorEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a></code> | commit_author_email_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.commitMessagePattern">commitMessagePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a></code> | commit_message_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.committerEmailPattern">committerEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a></code> | committer_email_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.creation">creation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Only allow users with bypass permission to create matching refs. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.deletion">deletion</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Only allow users with bypass permissions to delete matching refs. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.nonFastForward">nonFastForward</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Prevent users with push access from force pushing to branches. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredCodeScanning">requiredCodeScanning</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a></code> | required_code_scanning block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredLinearHistory">requiredLinearHistory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Prevent merge commits from being pushed to matching branches. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredSignatures">requiredSignatures</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Commits pushed to matching branches must have verified signatures. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredStatusChecks">requiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a></code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredWorkflows">requiredWorkflows</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a></code> | required_workflows block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.tagNamePattern">tagNamePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a></code> | tag_name_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.update">update</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Only allow users with bypass permission to update matching refs. |

---

##### `branchNamePattern`<sup>Optional</sup> <a name="branchNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.branchNamePattern"></a>

```java
public OrganizationRulesetRulesBranchNamePattern getBranchNamePattern();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a>

branch_name_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#branch_name_pattern OrganizationRuleset#branch_name_pattern}

---

##### `commitAuthorEmailPattern`<sup>Optional</sup> <a name="commitAuthorEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.commitAuthorEmailPattern"></a>

```java
public OrganizationRulesetRulesCommitAuthorEmailPattern getCommitAuthorEmailPattern();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a>

commit_author_email_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#commit_author_email_pattern OrganizationRuleset#commit_author_email_pattern}

---

##### `commitMessagePattern`<sup>Optional</sup> <a name="commitMessagePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.commitMessagePattern"></a>

```java
public OrganizationRulesetRulesCommitMessagePattern getCommitMessagePattern();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a>

commit_message_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#commit_message_pattern OrganizationRuleset#commit_message_pattern}

---

##### `committerEmailPattern`<sup>Optional</sup> <a name="committerEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.committerEmailPattern"></a>

```java
public OrganizationRulesetRulesCommitterEmailPattern getCommitterEmailPattern();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a>

committer_email_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#committer_email_pattern OrganizationRuleset#committer_email_pattern}

---

##### `creation`<sup>Optional</sup> <a name="creation" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.creation"></a>

```java
public java.lang.Boolean|IResolvable getCreation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Only allow users with bypass permission to create matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#creation OrganizationRuleset#creation}

---

##### `deletion`<sup>Optional</sup> <a name="deletion" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.deletion"></a>

```java
public java.lang.Boolean|IResolvable getDeletion();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Only allow users with bypass permissions to delete matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#deletion OrganizationRuleset#deletion}

---

##### `nonFastForward`<sup>Optional</sup> <a name="nonFastForward" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.nonFastForward"></a>

```java
public java.lang.Boolean|IResolvable getNonFastForward();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Prevent users with push access from force pushing to branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#non_fast_forward OrganizationRuleset#non_fast_forward}

---

##### `pullRequest`<sup>Optional</sup> <a name="pullRequest" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.pullRequest"></a>

```java
public OrganizationRulesetRulesPullRequest getPullRequest();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#pull_request OrganizationRuleset#pull_request}

---

##### `requiredCodeScanning`<sup>Optional</sup> <a name="requiredCodeScanning" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredCodeScanning"></a>

```java
public OrganizationRulesetRulesRequiredCodeScanning getRequiredCodeScanning();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a>

required_code_scanning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#required_code_scanning OrganizationRuleset#required_code_scanning}

---

##### `requiredLinearHistory`<sup>Optional</sup> <a name="requiredLinearHistory" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredLinearHistory"></a>

```java
public java.lang.Boolean|IResolvable getRequiredLinearHistory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Prevent merge commits from being pushed to matching branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#required_linear_history OrganizationRuleset#required_linear_history}

---

##### `requiredSignatures`<sup>Optional</sup> <a name="requiredSignatures" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredSignatures"></a>

```java
public java.lang.Boolean|IResolvable getRequiredSignatures();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Commits pushed to matching branches must have verified signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#required_signatures OrganizationRuleset#required_signatures}

---

##### `requiredStatusChecks`<sup>Optional</sup> <a name="requiredStatusChecks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredStatusChecks"></a>

```java
public OrganizationRulesetRulesRequiredStatusChecks getRequiredStatusChecks();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a>

required_status_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#required_status_checks OrganizationRuleset#required_status_checks}

---

##### `requiredWorkflows`<sup>Optional</sup> <a name="requiredWorkflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredWorkflows"></a>

```java
public OrganizationRulesetRulesRequiredWorkflows getRequiredWorkflows();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a>

required_workflows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#required_workflows OrganizationRuleset#required_workflows}

---

##### `tagNamePattern`<sup>Optional</sup> <a name="tagNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.tagNamePattern"></a>

```java
public OrganizationRulesetRulesTagNamePattern getTagNamePattern();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a>

tag_name_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#tag_name_pattern OrganizationRuleset#tag_name_pattern}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.update"></a>

```java
public java.lang.Boolean|IResolvable getUpdate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Only allow users with bypass permission to update matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#update OrganizationRuleset#update}

---

### OrganizationRulesetRulesBranchNamePattern <a name="OrganizationRulesetRulesBranchNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesBranchNamePattern;

OrganizationRulesetRulesBranchNamePattern.builder()
    .operator(java.lang.String)
    .pattern(java.lang.String)
//  .name(java.lang.String)
//  .negate(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.operator">operator</a></code> | <code>java.lang.String</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.pattern">pattern</a></code> | <code>java.lang.String</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.name">name</a></code> | <code>java.lang.String</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.negate">negate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

### OrganizationRulesetRulesCommitAuthorEmailPattern <a name="OrganizationRulesetRulesCommitAuthorEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesCommitAuthorEmailPattern;

OrganizationRulesetRulesCommitAuthorEmailPattern.builder()
    .operator(java.lang.String)
    .pattern(java.lang.String)
//  .name(java.lang.String)
//  .negate(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.operator">operator</a></code> | <code>java.lang.String</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.pattern">pattern</a></code> | <code>java.lang.String</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.name">name</a></code> | <code>java.lang.String</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.negate">negate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

### OrganizationRulesetRulesCommitMessagePattern <a name="OrganizationRulesetRulesCommitMessagePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesCommitMessagePattern;

OrganizationRulesetRulesCommitMessagePattern.builder()
    .operator(java.lang.String)
    .pattern(java.lang.String)
//  .name(java.lang.String)
//  .negate(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.operator">operator</a></code> | <code>java.lang.String</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.pattern">pattern</a></code> | <code>java.lang.String</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.name">name</a></code> | <code>java.lang.String</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.negate">negate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

### OrganizationRulesetRulesCommitterEmailPattern <a name="OrganizationRulesetRulesCommitterEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesCommitterEmailPattern;

OrganizationRulesetRulesCommitterEmailPattern.builder()
    .operator(java.lang.String)
    .pattern(java.lang.String)
//  .name(java.lang.String)
//  .negate(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.operator">operator</a></code> | <code>java.lang.String</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.pattern">pattern</a></code> | <code>java.lang.String</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.name">name</a></code> | <code>java.lang.String</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.negate">negate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

### OrganizationRulesetRulesPullRequest <a name="OrganizationRulesetRulesPullRequest" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesPullRequest;

OrganizationRulesetRulesPullRequest.builder()
//  .dismissStaleReviewsOnPush(java.lang.Boolean|IResolvable)
//  .requireCodeOwnerReview(java.lang.Boolean|IResolvable)
//  .requiredApprovingReviewCount(java.lang.Number)
//  .requiredReviewThreadResolution(java.lang.Boolean|IResolvable)
//  .requireLastPushApproval(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.dismissStaleReviewsOnPush">dismissStaleReviewsOnPush</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requireCodeOwnerReview">requireCodeOwnerReview</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requiredApprovingReviewCount">requiredApprovingReviewCount</a></code> | <code>java.lang.Number</code> | The number of approving reviews that are required before a pull request can be merged. Defaults to `0`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requiredReviewThreadResolution">requiredReviewThreadResolution</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | All conversations on code must be resolved before a pull request can be merged. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requireLastPushApproval">requireLastPushApproval</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the most recent reviewable push must be approved by someone other than the person who pushed it. |

---

##### `dismissStaleReviewsOnPush`<sup>Optional</sup> <a name="dismissStaleReviewsOnPush" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.dismissStaleReviewsOnPush"></a>

```java
public java.lang.Boolean|IResolvable getDismissStaleReviewsOnPush();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#dismiss_stale_reviews_on_push OrganizationRuleset#dismiss_stale_reviews_on_push}

---

##### `requireCodeOwnerReview`<sup>Optional</sup> <a name="requireCodeOwnerReview" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requireCodeOwnerReview"></a>

```java
public java.lang.Boolean|IResolvable getRequireCodeOwnerReview();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#require_code_owner_review OrganizationRuleset#require_code_owner_review}

---

##### `requiredApprovingReviewCount`<sup>Optional</sup> <a name="requiredApprovingReviewCount" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requiredApprovingReviewCount"></a>

```java
public java.lang.Number getRequiredApprovingReviewCount();
```

- *Type:* java.lang.Number

The number of approving reviews that are required before a pull request can be merged. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#required_approving_review_count OrganizationRuleset#required_approving_review_count}

---

##### `requiredReviewThreadResolution`<sup>Optional</sup> <a name="requiredReviewThreadResolution" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requiredReviewThreadResolution"></a>

```java
public java.lang.Boolean|IResolvable getRequiredReviewThreadResolution();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

All conversations on code must be resolved before a pull request can be merged. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#required_review_thread_resolution OrganizationRuleset#required_review_thread_resolution}

---

##### `requireLastPushApproval`<sup>Optional</sup> <a name="requireLastPushApproval" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requireLastPushApproval"></a>

```java
public java.lang.Boolean|IResolvable getRequireLastPushApproval();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the most recent reviewable push must be approved by someone other than the person who pushed it.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#require_last_push_approval OrganizationRuleset#require_last_push_approval}

---

### OrganizationRulesetRulesRequiredCodeScanning <a name="OrganizationRulesetRulesRequiredCodeScanning" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesRequiredCodeScanning;

OrganizationRulesetRulesRequiredCodeScanning.builder()
    .requiredCodeScanningTool(IResolvable|java.util.List<OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning.property.requiredCodeScanningTool">requiredCodeScanningTool</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>></code> | required_code_scanning_tool block. |

---

##### `requiredCodeScanningTool`<sup>Required</sup> <a name="requiredCodeScanningTool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning.property.requiredCodeScanningTool"></a>

```java
public IResolvable|java.util.List<OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool> getRequiredCodeScanningTool();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>>

required_code_scanning_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#required_code_scanning_tool OrganizationRuleset#required_code_scanning_tool}

---

### OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool <a name="OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool;

OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.builder()
    .alertsThreshold(java.lang.String)
    .securityAlertsThreshold(java.lang.String)
    .tool(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.alertsThreshold">alertsThreshold</a></code> | <code>java.lang.String</code> | The severity level at which code scanning results that raise alerts block a reference update. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.securityAlertsThreshold">securityAlertsThreshold</a></code> | <code>java.lang.String</code> | The severity level at which code scanning results that raise security alerts block a reference update. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.tool">tool</a></code> | <code>java.lang.String</code> | The name of a code scanning tool. |

---

##### `alertsThreshold`<sup>Required</sup> <a name="alertsThreshold" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.alertsThreshold"></a>

```java
public java.lang.String getAlertsThreshold();
```

- *Type:* java.lang.String

The severity level at which code scanning results that raise alerts block a reference update.

Can be one of: `none`, `errors`, `errors_and_warnings`, `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#alerts_threshold OrganizationRuleset#alerts_threshold}

---

##### `securityAlertsThreshold`<sup>Required</sup> <a name="securityAlertsThreshold" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.securityAlertsThreshold"></a>

```java
public java.lang.String getSecurityAlertsThreshold();
```

- *Type:* java.lang.String

The severity level at which code scanning results that raise security alerts block a reference update.

Can be one of: `none`, `critical`, `high_or_higher`, `medium_or_higher`, `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#security_alerts_threshold OrganizationRuleset#security_alerts_threshold}

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.tool"></a>

```java
public java.lang.String getTool();
```

- *Type:* java.lang.String

The name of a code scanning tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#tool OrganizationRuleset#tool}

---

### OrganizationRulesetRulesRequiredStatusChecks <a name="OrganizationRulesetRulesRequiredStatusChecks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesRequiredStatusChecks;

OrganizationRulesetRulesRequiredStatusChecks.builder()
    .requiredCheck(IResolvable|java.util.List<OrganizationRulesetRulesRequiredStatusChecksRequiredCheck>)
//  .doNotEnforceOnCreate(java.lang.Boolean|IResolvable)
//  .strictRequiredStatusChecksPolicy(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.requiredCheck">requiredCheck</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>></code> | required_check block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.doNotEnforceOnCreate">doNotEnforceOnCreate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allow repositories and branches to be created if a check would otherwise prohibit it. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.strictRequiredStatusChecksPolicy">strictRequiredStatusChecksPolicy</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether pull requests targeting a matching branch must be tested with the latest code. |

---

##### `requiredCheck`<sup>Required</sup> <a name="requiredCheck" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.requiredCheck"></a>

```java
public IResolvable|java.util.List<OrganizationRulesetRulesRequiredStatusChecksRequiredCheck> getRequiredCheck();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>>

required_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#required_check OrganizationRuleset#required_check}

---

##### `doNotEnforceOnCreate`<sup>Optional</sup> <a name="doNotEnforceOnCreate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.doNotEnforceOnCreate"></a>

```java
public java.lang.Boolean|IResolvable getDoNotEnforceOnCreate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allow repositories and branches to be created if a check would otherwise prohibit it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#do_not_enforce_on_create OrganizationRuleset#do_not_enforce_on_create}

---

##### `strictRequiredStatusChecksPolicy`<sup>Optional</sup> <a name="strictRequiredStatusChecksPolicy" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.strictRequiredStatusChecksPolicy"></a>

```java
public java.lang.Boolean|IResolvable getStrictRequiredStatusChecksPolicy();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether pull requests targeting a matching branch must be tested with the latest code.

This setting will not take effect unless at least one status check is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#strict_required_status_checks_policy OrganizationRuleset#strict_required_status_checks_policy}

---

### OrganizationRulesetRulesRequiredStatusChecksRequiredCheck <a name="OrganizationRulesetRulesRequiredStatusChecksRequiredCheck" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck;

OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.builder()
    .context(java.lang.String)
//  .integrationId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.property.context">context</a></code> | <code>java.lang.String</code> | The status check context name that must be present on the commit. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.property.integrationId">integrationId</a></code> | <code>java.lang.Number</code> | The optional integration ID that this status check must originate from. |

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

The status check context name that must be present on the commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#context OrganizationRuleset#context}

---

##### `integrationId`<sup>Optional</sup> <a name="integrationId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.property.integrationId"></a>

```java
public java.lang.Number getIntegrationId();
```

- *Type:* java.lang.Number

The optional integration ID that this status check must originate from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#integration_id OrganizationRuleset#integration_id}

---

### OrganizationRulesetRulesRequiredWorkflows <a name="OrganizationRulesetRulesRequiredWorkflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesRequiredWorkflows;

OrganizationRulesetRulesRequiredWorkflows.builder()
    .requiredWorkflow(IResolvable|java.util.List<OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow>)
//  .doNotEnforceOnCreate(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.property.requiredWorkflow">requiredWorkflow</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>></code> | required_workflow block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.property.doNotEnforceOnCreate">doNotEnforceOnCreate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allow repositories and branches to be created if a check would otherwise prohibit it. |

---

##### `requiredWorkflow`<sup>Required</sup> <a name="requiredWorkflow" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.property.requiredWorkflow"></a>

```java
public IResolvable|java.util.List<OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow> getRequiredWorkflow();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>>

required_workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#required_workflow OrganizationRuleset#required_workflow}

---

##### `doNotEnforceOnCreate`<sup>Optional</sup> <a name="doNotEnforceOnCreate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.property.doNotEnforceOnCreate"></a>

```java
public java.lang.Boolean|IResolvable getDoNotEnforceOnCreate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allow repositories and branches to be created if a check would otherwise prohibit it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#do_not_enforce_on_create OrganizationRuleset#do_not_enforce_on_create}

---

### OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow <a name="OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow;

OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.builder()
    .path(java.lang.String)
    .repositoryId(java.lang.Number)
//  .ref(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.path">path</a></code> | <code>java.lang.String</code> | The path to the workflow YAML definition file. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.repositoryId">repositoryId</a></code> | <code>java.lang.Number</code> | The repository in which the workflow is defined. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.ref">ref</a></code> | <code>java.lang.String</code> | The ref (branch or tag) of the workflow file to use. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path to the workflow YAML definition file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#path OrganizationRuleset#path}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.repositoryId"></a>

```java
public java.lang.Number getRepositoryId();
```

- *Type:* java.lang.Number

The repository in which the workflow is defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#repository_id OrganizationRuleset#repository_id}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

The ref (branch or tag) of the workflow file to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#ref OrganizationRuleset#ref}

---

### OrganizationRulesetRulesTagNamePattern <a name="OrganizationRulesetRulesTagNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesTagNamePattern;

OrganizationRulesetRulesTagNamePattern.builder()
    .operator(java.lang.String)
    .pattern(java.lang.String)
//  .name(java.lang.String)
//  .negate(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.operator">operator</a></code> | <code>java.lang.String</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.pattern">pattern</a></code> | <code>java.lang.String</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.name">name</a></code> | <code>java.lang.String</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.negate">negate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationRulesetBypassActorsList <a name="OrganizationRulesetBypassActorsList" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetBypassActorsList;

new OrganizationRulesetBypassActorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.get"></a>

```java
public OrganizationRulesetBypassActorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OrganizationRulesetBypassActors> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>>

---


### OrganizationRulesetBypassActorsOutputReference <a name="OrganizationRulesetBypassActorsOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetBypassActorsOutputReference;

new OrganizationRulesetBypassActorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resetActorId">resetActorId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActorId` <a name="resetActorId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resetActorId"></a>

```java
public void resetActorId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorIdInput">actorIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorTypeInput">actorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.bypassModeInput">bypassModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorId">actorId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorType">actorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.bypassMode">bypassMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actorIdInput`<sup>Optional</sup> <a name="actorIdInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorIdInput"></a>

```java
public java.lang.Number getActorIdInput();
```

- *Type:* java.lang.Number

---

##### `actorTypeInput`<sup>Optional</sup> <a name="actorTypeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorTypeInput"></a>

```java
public java.lang.String getActorTypeInput();
```

- *Type:* java.lang.String

---

##### `bypassModeInput`<sup>Optional</sup> <a name="bypassModeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.bypassModeInput"></a>

```java
public java.lang.String getBypassModeInput();
```

- *Type:* java.lang.String

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorId"></a>

```java
public java.lang.Number getActorId();
```

- *Type:* java.lang.Number

---

##### `actorType`<sup>Required</sup> <a name="actorType" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorType"></a>

```java
public java.lang.String getActorType();
```

- *Type:* java.lang.String

---

##### `bypassMode`<sup>Required</sup> <a name="bypassMode" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.bypassMode"></a>

```java
public java.lang.String getBypassMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.internalValue"></a>

```java
public IResolvable|OrganizationRulesetBypassActors getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>

---


### OrganizationRulesetConditionsOutputReference <a name="OrganizationRulesetConditionsOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetConditionsOutputReference;

new OrganizationRulesetConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRefName">putRefName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRepositoryName">putRepositoryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resetRepositoryId">resetRepositoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resetRepositoryName">resetRepositoryName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRefName` <a name="putRefName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRefName"></a>

```java
public void putRefName(OrganizationRulesetConditionsRefName value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRefName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a>

---

##### `putRepositoryName` <a name="putRepositoryName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRepositoryName"></a>

```java
public void putRepositoryName(OrganizationRulesetConditionsRepositoryName value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRepositoryName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a>

---

##### `resetRepositoryId` <a name="resetRepositoryId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resetRepositoryId"></a>

```java
public void resetRepositoryId()
```

##### `resetRepositoryName` <a name="resetRepositoryName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resetRepositoryName"></a>

```java
public void resetRepositoryName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.refName">refName</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference">OrganizationRulesetConditionsRefNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryName">repositoryName</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference">OrganizationRulesetConditionsRepositoryNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.refNameInput">refNameInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryNameInput">repositoryNameInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryId">repositoryId</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `refName`<sup>Required</sup> <a name="refName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.refName"></a>

```java
public OrganizationRulesetConditionsRefNameOutputReference getRefName();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference">OrganizationRulesetConditionsRefNameOutputReference</a>

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryName"></a>

```java
public OrganizationRulesetConditionsRepositoryNameOutputReference getRepositoryName();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference">OrganizationRulesetConditionsRepositoryNameOutputReference</a>

---

##### `refNameInput`<sup>Optional</sup> <a name="refNameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.refNameInput"></a>

```java
public OrganizationRulesetConditionsRefName getRefNameInput();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a>

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryIdInput"></a>

```java
public java.util.List<java.lang.Number> getRepositoryIdInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryNameInput"></a>

```java
public OrganizationRulesetConditionsRepositoryName getRepositoryNameInput();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a>

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryId"></a>

```java
public java.util.List<java.lang.Number> getRepositoryId();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.internalValue"></a>

```java
public OrganizationRulesetConditions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a>

---


### OrganizationRulesetConditionsRefNameOutputReference <a name="OrganizationRulesetConditionsRefNameOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetConditionsRefNameOutputReference;

new OrganizationRulesetConditionsRefNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.excludeInput">excludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.includeInput">includeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.exclude">exclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.excludeInput"></a>

```java
public java.util.List<java.lang.String> getExcludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.includeInput"></a>

```java
public java.util.List<java.lang.String> getIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.exclude"></a>

```java
public java.util.List<java.lang.String> getExclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.internalValue"></a>

```java
public OrganizationRulesetConditionsRefName getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a>

---


### OrganizationRulesetConditionsRepositoryNameOutputReference <a name="OrganizationRulesetConditionsRepositoryNameOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetConditionsRepositoryNameOutputReference;

new OrganizationRulesetConditionsRepositoryNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resetProtected">resetProtected</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProtected` <a name="resetProtected" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resetProtected"></a>

```java
public void resetProtected()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.excludeInput">excludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.includeInput">includeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.protectedInput">protectedInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.exclude">exclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.protected">protected</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.excludeInput"></a>

```java
public java.util.List<java.lang.String> getExcludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.includeInput"></a>

```java
public java.util.List<java.lang.String> getIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protectedInput`<sup>Optional</sup> <a name="protectedInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.protectedInput"></a>

```java
public java.lang.Boolean|IResolvable getProtectedInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.exclude"></a>

```java
public java.util.List<java.lang.String> getExclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protected`<sup>Required</sup> <a name="protected" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.protected"></a>

```java
public java.lang.Boolean|IResolvable getProtected();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.internalValue"></a>

```java
public OrganizationRulesetConditionsRepositoryName getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a>

---


### OrganizationRulesetRulesBranchNamePatternOutputReference <a name="OrganizationRulesetRulesBranchNamePatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesBranchNamePatternOutputReference;

new OrganizationRulesetRulesBranchNamePatternOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resetNegate">resetNegate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resetNegate"></a>

```java
public void resetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.negateInput">negateInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.negate">negate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.negateInput"></a>

```java
public java.lang.Boolean|IResolvable getNegateInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.internalValue"></a>

```java
public OrganizationRulesetRulesBranchNamePattern getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a>

---


### OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference <a name="OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference;

new OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resetNegate">resetNegate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resetNegate"></a>

```java
public void resetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.negateInput">negateInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.negate">negate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.negateInput"></a>

```java
public java.lang.Boolean|IResolvable getNegateInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.internalValue"></a>

```java
public OrganizationRulesetRulesCommitAuthorEmailPattern getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a>

---


### OrganizationRulesetRulesCommitMessagePatternOutputReference <a name="OrganizationRulesetRulesCommitMessagePatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesCommitMessagePatternOutputReference;

new OrganizationRulesetRulesCommitMessagePatternOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resetNegate">resetNegate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resetNegate"></a>

```java
public void resetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.negateInput">negateInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.negate">negate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.negateInput"></a>

```java
public java.lang.Boolean|IResolvable getNegateInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.internalValue"></a>

```java
public OrganizationRulesetRulesCommitMessagePattern getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a>

---


### OrganizationRulesetRulesCommitterEmailPatternOutputReference <a name="OrganizationRulesetRulesCommitterEmailPatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference;

new OrganizationRulesetRulesCommitterEmailPatternOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resetNegate">resetNegate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resetNegate"></a>

```java
public void resetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.negateInput">negateInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.negate">negate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.negateInput"></a>

```java
public java.lang.Boolean|IResolvable getNegateInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.internalValue"></a>

```java
public OrganizationRulesetRulesCommitterEmailPattern getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a>

---


### OrganizationRulesetRulesOutputReference <a name="OrganizationRulesetRulesOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesOutputReference;

new OrganizationRulesetRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putBranchNamePattern">putBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitAuthorEmailPattern">putCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitMessagePattern">putCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitterEmailPattern">putCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putPullRequest">putPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredCodeScanning">putRequiredCodeScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredStatusChecks">putRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredWorkflows">putRequiredWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putTagNamePattern">putTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetBranchNamePattern">resetBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitAuthorEmailPattern">resetCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitMessagePattern">resetCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitterEmailPattern">resetCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCreation">resetCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetDeletion">resetDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetNonFastForward">resetNonFastForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetPullRequest">resetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredCodeScanning">resetRequiredCodeScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredLinearHistory">resetRequiredLinearHistory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredSignatures">resetRequiredSignatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredStatusChecks">resetRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredWorkflows">resetRequiredWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetTagNamePattern">resetTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBranchNamePattern` <a name="putBranchNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putBranchNamePattern"></a>

```java
public void putBranchNamePattern(OrganizationRulesetRulesBranchNamePattern value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putBranchNamePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a>

---

##### `putCommitAuthorEmailPattern` <a name="putCommitAuthorEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitAuthorEmailPattern"></a>

```java
public void putCommitAuthorEmailPattern(OrganizationRulesetRulesCommitAuthorEmailPattern value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitAuthorEmailPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a>

---

##### `putCommitMessagePattern` <a name="putCommitMessagePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitMessagePattern"></a>

```java
public void putCommitMessagePattern(OrganizationRulesetRulesCommitMessagePattern value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitMessagePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a>

---

##### `putCommitterEmailPattern` <a name="putCommitterEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitterEmailPattern"></a>

```java
public void putCommitterEmailPattern(OrganizationRulesetRulesCommitterEmailPattern value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitterEmailPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a>

---

##### `putPullRequest` <a name="putPullRequest" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putPullRequest"></a>

```java
public void putPullRequest(OrganizationRulesetRulesPullRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putPullRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a>

---

##### `putRequiredCodeScanning` <a name="putRequiredCodeScanning" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredCodeScanning"></a>

```java
public void putRequiredCodeScanning(OrganizationRulesetRulesRequiredCodeScanning value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredCodeScanning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a>

---

##### `putRequiredStatusChecks` <a name="putRequiredStatusChecks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredStatusChecks"></a>

```java
public void putRequiredStatusChecks(OrganizationRulesetRulesRequiredStatusChecks value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredStatusChecks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a>

---

##### `putRequiredWorkflows` <a name="putRequiredWorkflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredWorkflows"></a>

```java
public void putRequiredWorkflows(OrganizationRulesetRulesRequiredWorkflows value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredWorkflows.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a>

---

##### `putTagNamePattern` <a name="putTagNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putTagNamePattern"></a>

```java
public void putTagNamePattern(OrganizationRulesetRulesTagNamePattern value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putTagNamePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a>

---

##### `resetBranchNamePattern` <a name="resetBranchNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetBranchNamePattern"></a>

```java
public void resetBranchNamePattern()
```

##### `resetCommitAuthorEmailPattern` <a name="resetCommitAuthorEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitAuthorEmailPattern"></a>

```java
public void resetCommitAuthorEmailPattern()
```

##### `resetCommitMessagePattern` <a name="resetCommitMessagePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitMessagePattern"></a>

```java
public void resetCommitMessagePattern()
```

##### `resetCommitterEmailPattern` <a name="resetCommitterEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitterEmailPattern"></a>

```java
public void resetCommitterEmailPattern()
```

##### `resetCreation` <a name="resetCreation" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCreation"></a>

```java
public void resetCreation()
```

##### `resetDeletion` <a name="resetDeletion" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetDeletion"></a>

```java
public void resetDeletion()
```

##### `resetNonFastForward` <a name="resetNonFastForward" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetNonFastForward"></a>

```java
public void resetNonFastForward()
```

##### `resetPullRequest` <a name="resetPullRequest" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetPullRequest"></a>

```java
public void resetPullRequest()
```

##### `resetRequiredCodeScanning` <a name="resetRequiredCodeScanning" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredCodeScanning"></a>

```java
public void resetRequiredCodeScanning()
```

##### `resetRequiredLinearHistory` <a name="resetRequiredLinearHistory" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredLinearHistory"></a>

```java
public void resetRequiredLinearHistory()
```

##### `resetRequiredSignatures` <a name="resetRequiredSignatures" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredSignatures"></a>

```java
public void resetRequiredSignatures()
```

##### `resetRequiredStatusChecks` <a name="resetRequiredStatusChecks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredStatusChecks"></a>

```java
public void resetRequiredStatusChecks()
```

##### `resetRequiredWorkflows` <a name="resetRequiredWorkflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredWorkflows"></a>

```java
public void resetRequiredWorkflows()
```

##### `resetTagNamePattern` <a name="resetTagNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetTagNamePattern"></a>

```java
public void resetTagNamePattern()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.branchNamePattern">branchNamePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference">OrganizationRulesetRulesBranchNamePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitAuthorEmailPattern">commitAuthorEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference">OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitMessagePattern">commitMessagePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference">OrganizationRulesetRulesCommitMessagePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.committerEmailPattern">committerEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference">OrganizationRulesetRulesCommitterEmailPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference">OrganizationRulesetRulesPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredCodeScanning">requiredCodeScanning</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference">OrganizationRulesetRulesRequiredCodeScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredStatusChecks">requiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference">OrganizationRulesetRulesRequiredStatusChecksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredWorkflows">requiredWorkflows</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference">OrganizationRulesetRulesRequiredWorkflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.tagNamePattern">tagNamePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference">OrganizationRulesetRulesTagNamePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.branchNamePatternInput">branchNamePatternInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitAuthorEmailPatternInput">commitAuthorEmailPatternInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitMessagePatternInput">commitMessagePatternInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.committerEmailPatternInput">committerEmailPatternInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creationInput">creationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.deletionInput">deletionInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.nonFastForwardInput">nonFastForwardInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.pullRequestInput">pullRequestInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredCodeScanningInput">requiredCodeScanningInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredLinearHistoryInput">requiredLinearHistoryInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredSignaturesInput">requiredSignaturesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredStatusChecksInput">requiredStatusChecksInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredWorkflowsInput">requiredWorkflowsInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.tagNamePatternInput">tagNamePatternInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creation">creation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.deletion">deletion</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.nonFastForward">nonFastForward</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredLinearHistory">requiredLinearHistory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredSignatures">requiredSignatures</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.update">update</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchNamePattern`<sup>Required</sup> <a name="branchNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.branchNamePattern"></a>

```java
public OrganizationRulesetRulesBranchNamePatternOutputReference getBranchNamePattern();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference">OrganizationRulesetRulesBranchNamePatternOutputReference</a>

---

##### `commitAuthorEmailPattern`<sup>Required</sup> <a name="commitAuthorEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitAuthorEmailPattern"></a>

```java
public OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference getCommitAuthorEmailPattern();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference">OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference</a>

---

##### `commitMessagePattern`<sup>Required</sup> <a name="commitMessagePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitMessagePattern"></a>

```java
public OrganizationRulesetRulesCommitMessagePatternOutputReference getCommitMessagePattern();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference">OrganizationRulesetRulesCommitMessagePatternOutputReference</a>

---

##### `committerEmailPattern`<sup>Required</sup> <a name="committerEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.committerEmailPattern"></a>

```java
public OrganizationRulesetRulesCommitterEmailPatternOutputReference getCommitterEmailPattern();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference">OrganizationRulesetRulesCommitterEmailPatternOutputReference</a>

---

##### `pullRequest`<sup>Required</sup> <a name="pullRequest" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.pullRequest"></a>

```java
public OrganizationRulesetRulesPullRequestOutputReference getPullRequest();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference">OrganizationRulesetRulesPullRequestOutputReference</a>

---

##### `requiredCodeScanning`<sup>Required</sup> <a name="requiredCodeScanning" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredCodeScanning"></a>

```java
public OrganizationRulesetRulesRequiredCodeScanningOutputReference getRequiredCodeScanning();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference">OrganizationRulesetRulesRequiredCodeScanningOutputReference</a>

---

##### `requiredStatusChecks`<sup>Required</sup> <a name="requiredStatusChecks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredStatusChecks"></a>

```java
public OrganizationRulesetRulesRequiredStatusChecksOutputReference getRequiredStatusChecks();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference">OrganizationRulesetRulesRequiredStatusChecksOutputReference</a>

---

##### `requiredWorkflows`<sup>Required</sup> <a name="requiredWorkflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredWorkflows"></a>

```java
public OrganizationRulesetRulesRequiredWorkflowsOutputReference getRequiredWorkflows();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference">OrganizationRulesetRulesRequiredWorkflowsOutputReference</a>

---

##### `tagNamePattern`<sup>Required</sup> <a name="tagNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.tagNamePattern"></a>

```java
public OrganizationRulesetRulesTagNamePatternOutputReference getTagNamePattern();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference">OrganizationRulesetRulesTagNamePatternOutputReference</a>

---

##### `branchNamePatternInput`<sup>Optional</sup> <a name="branchNamePatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.branchNamePatternInput"></a>

```java
public OrganizationRulesetRulesBranchNamePattern getBranchNamePatternInput();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a>

---

##### `commitAuthorEmailPatternInput`<sup>Optional</sup> <a name="commitAuthorEmailPatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitAuthorEmailPatternInput"></a>

```java
public OrganizationRulesetRulesCommitAuthorEmailPattern getCommitAuthorEmailPatternInput();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a>

---

##### `commitMessagePatternInput`<sup>Optional</sup> <a name="commitMessagePatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitMessagePatternInput"></a>

```java
public OrganizationRulesetRulesCommitMessagePattern getCommitMessagePatternInput();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a>

---

##### `committerEmailPatternInput`<sup>Optional</sup> <a name="committerEmailPatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.committerEmailPatternInput"></a>

```java
public OrganizationRulesetRulesCommitterEmailPattern getCommitterEmailPatternInput();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a>

---

##### `creationInput`<sup>Optional</sup> <a name="creationInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creationInput"></a>

```java
public java.lang.Boolean|IResolvable getCreationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `deletionInput`<sup>Optional</sup> <a name="deletionInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.deletionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nonFastForwardInput`<sup>Optional</sup> <a name="nonFastForwardInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.nonFastForwardInput"></a>

```java
public java.lang.Boolean|IResolvable getNonFastForwardInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pullRequestInput`<sup>Optional</sup> <a name="pullRequestInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.pullRequestInput"></a>

```java
public OrganizationRulesetRulesPullRequest getPullRequestInput();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a>

---

##### `requiredCodeScanningInput`<sup>Optional</sup> <a name="requiredCodeScanningInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredCodeScanningInput"></a>

```java
public OrganizationRulesetRulesRequiredCodeScanning getRequiredCodeScanningInput();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a>

---

##### `requiredLinearHistoryInput`<sup>Optional</sup> <a name="requiredLinearHistoryInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredLinearHistoryInput"></a>

```java
public java.lang.Boolean|IResolvable getRequiredLinearHistoryInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requiredSignaturesInput`<sup>Optional</sup> <a name="requiredSignaturesInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredSignaturesInput"></a>

```java
public java.lang.Boolean|IResolvable getRequiredSignaturesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requiredStatusChecksInput`<sup>Optional</sup> <a name="requiredStatusChecksInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredStatusChecksInput"></a>

```java
public OrganizationRulesetRulesRequiredStatusChecks getRequiredStatusChecksInput();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a>

---

##### `requiredWorkflowsInput`<sup>Optional</sup> <a name="requiredWorkflowsInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredWorkflowsInput"></a>

```java
public OrganizationRulesetRulesRequiredWorkflows getRequiredWorkflowsInput();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a>

---

##### `tagNamePatternInput`<sup>Optional</sup> <a name="tagNamePatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.tagNamePatternInput"></a>

```java
public OrganizationRulesetRulesTagNamePattern getTagNamePatternInput();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a>

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.updateInput"></a>

```java
public java.lang.Boolean|IResolvable getUpdateInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `creation`<sup>Required</sup> <a name="creation" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creation"></a>

```java
public java.lang.Boolean|IResolvable getCreation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `deletion`<sup>Required</sup> <a name="deletion" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.deletion"></a>

```java
public java.lang.Boolean|IResolvable getDeletion();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nonFastForward`<sup>Required</sup> <a name="nonFastForward" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.nonFastForward"></a>

```java
public java.lang.Boolean|IResolvable getNonFastForward();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requiredLinearHistory`<sup>Required</sup> <a name="requiredLinearHistory" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredLinearHistory"></a>

```java
public java.lang.Boolean|IResolvable getRequiredLinearHistory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requiredSignatures`<sup>Required</sup> <a name="requiredSignatures" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredSignatures"></a>

```java
public java.lang.Boolean|IResolvable getRequiredSignatures();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.update"></a>

```java
public java.lang.Boolean|IResolvable getUpdate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.internalValue"></a>

```java
public OrganizationRulesetRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a>

---


### OrganizationRulesetRulesPullRequestOutputReference <a name="OrganizationRulesetRulesPullRequestOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesPullRequestOutputReference;

new OrganizationRulesetRulesPullRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetDismissStaleReviewsOnPush">resetDismissStaleReviewsOnPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequireCodeOwnerReview">resetRequireCodeOwnerReview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequiredApprovingReviewCount">resetRequiredApprovingReviewCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequiredReviewThreadResolution">resetRequiredReviewThreadResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequireLastPushApproval">resetRequireLastPushApproval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDismissStaleReviewsOnPush` <a name="resetDismissStaleReviewsOnPush" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetDismissStaleReviewsOnPush"></a>

```java
public void resetDismissStaleReviewsOnPush()
```

##### `resetRequireCodeOwnerReview` <a name="resetRequireCodeOwnerReview" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequireCodeOwnerReview"></a>

```java
public void resetRequireCodeOwnerReview()
```

##### `resetRequiredApprovingReviewCount` <a name="resetRequiredApprovingReviewCount" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequiredApprovingReviewCount"></a>

```java
public void resetRequiredApprovingReviewCount()
```

##### `resetRequiredReviewThreadResolution` <a name="resetRequiredReviewThreadResolution" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequiredReviewThreadResolution"></a>

```java
public void resetRequiredReviewThreadResolution()
```

##### `resetRequireLastPushApproval` <a name="resetRequireLastPushApproval" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequireLastPushApproval"></a>

```java
public void resetRequireLastPushApproval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPushInput">dismissStaleReviewsOnPushInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReviewInput">requireCodeOwnerReviewInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCountInput">requiredApprovingReviewCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolutionInput">requiredReviewThreadResolutionInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireLastPushApprovalInput">requireLastPushApprovalInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPush">dismissStaleReviewsOnPush</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReview">requireCodeOwnerReview</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCount">requiredApprovingReviewCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolution">requiredReviewThreadResolution</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireLastPushApproval">requireLastPushApproval</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dismissStaleReviewsOnPushInput`<sup>Optional</sup> <a name="dismissStaleReviewsOnPushInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPushInput"></a>

```java
public java.lang.Boolean|IResolvable getDismissStaleReviewsOnPushInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requireCodeOwnerReviewInput`<sup>Optional</sup> <a name="requireCodeOwnerReviewInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReviewInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireCodeOwnerReviewInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requiredApprovingReviewCountInput`<sup>Optional</sup> <a name="requiredApprovingReviewCountInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCountInput"></a>

```java
public java.lang.Number getRequiredApprovingReviewCountInput();
```

- *Type:* java.lang.Number

---

##### `requiredReviewThreadResolutionInput`<sup>Optional</sup> <a name="requiredReviewThreadResolutionInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolutionInput"></a>

```java
public java.lang.Boolean|IResolvable getRequiredReviewThreadResolutionInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requireLastPushApprovalInput`<sup>Optional</sup> <a name="requireLastPushApprovalInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireLastPushApprovalInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireLastPushApprovalInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `dismissStaleReviewsOnPush`<sup>Required</sup> <a name="dismissStaleReviewsOnPush" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPush"></a>

```java
public java.lang.Boolean|IResolvable getDismissStaleReviewsOnPush();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requireCodeOwnerReview`<sup>Required</sup> <a name="requireCodeOwnerReview" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReview"></a>

```java
public java.lang.Boolean|IResolvable getRequireCodeOwnerReview();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requiredApprovingReviewCount`<sup>Required</sup> <a name="requiredApprovingReviewCount" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCount"></a>

```java
public java.lang.Number getRequiredApprovingReviewCount();
```

- *Type:* java.lang.Number

---

##### `requiredReviewThreadResolution`<sup>Required</sup> <a name="requiredReviewThreadResolution" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolution"></a>

```java
public java.lang.Boolean|IResolvable getRequiredReviewThreadResolution();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requireLastPushApproval`<sup>Required</sup> <a name="requireLastPushApproval" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireLastPushApproval"></a>

```java
public java.lang.Boolean|IResolvable getRequireLastPushApproval();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.internalValue"></a>

```java
public OrganizationRulesetRulesPullRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a>

---


### OrganizationRulesetRulesRequiredCodeScanningOutputReference <a name="OrganizationRulesetRulesRequiredCodeScanningOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference;

new OrganizationRulesetRulesRequiredCodeScanningOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.putRequiredCodeScanningTool">putRequiredCodeScanningTool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequiredCodeScanningTool` <a name="putRequiredCodeScanningTool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.putRequiredCodeScanningTool"></a>

```java
public void putRequiredCodeScanningTool(IResolvable|java.util.List<OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.putRequiredCodeScanningTool.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.requiredCodeScanningTool">requiredCodeScanningTool</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.requiredCodeScanningToolInput">requiredCodeScanningToolInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requiredCodeScanningTool`<sup>Required</sup> <a name="requiredCodeScanningTool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.requiredCodeScanningTool"></a>

```java
public OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList getRequiredCodeScanningTool();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList</a>

---

##### `requiredCodeScanningToolInput`<sup>Optional</sup> <a name="requiredCodeScanningToolInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.requiredCodeScanningToolInput"></a>

```java
public IResolvable|java.util.List<OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool> getRequiredCodeScanningToolInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.internalValue"></a>

```java
public OrganizationRulesetRulesRequiredCodeScanning getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a>

---


### OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList <a name="OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList;

new OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.get"></a>

```java
public OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>>

---


### OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference <a name="OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference;

new OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.alertsThresholdInput">alertsThresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.securityAlertsThresholdInput">securityAlertsThresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.toolInput">toolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.alertsThreshold">alertsThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.securityAlertsThreshold">securityAlertsThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.tool">tool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alertsThresholdInput`<sup>Optional</sup> <a name="alertsThresholdInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.alertsThresholdInput"></a>

```java
public java.lang.String getAlertsThresholdInput();
```

- *Type:* java.lang.String

---

##### `securityAlertsThresholdInput`<sup>Optional</sup> <a name="securityAlertsThresholdInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.securityAlertsThresholdInput"></a>

```java
public java.lang.String getSecurityAlertsThresholdInput();
```

- *Type:* java.lang.String

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.toolInput"></a>

```java
public java.lang.String getToolInput();
```

- *Type:* java.lang.String

---

##### `alertsThreshold`<sup>Required</sup> <a name="alertsThreshold" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.alertsThreshold"></a>

```java
public java.lang.String getAlertsThreshold();
```

- *Type:* java.lang.String

---

##### `securityAlertsThreshold`<sup>Required</sup> <a name="securityAlertsThreshold" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.securityAlertsThreshold"></a>

```java
public java.lang.String getSecurityAlertsThreshold();
```

- *Type:* java.lang.String

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.tool"></a>

```java
public java.lang.String getTool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.internalValue"></a>

```java
public IResolvable|OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>

---


### OrganizationRulesetRulesRequiredStatusChecksOutputReference <a name="OrganizationRulesetRulesRequiredStatusChecksOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference;

new OrganizationRulesetRulesRequiredStatusChecksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck">putRequiredCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resetDoNotEnforceOnCreate">resetDoNotEnforceOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resetStrictRequiredStatusChecksPolicy">resetStrictRequiredStatusChecksPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequiredCheck` <a name="putRequiredCheck" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck"></a>

```java
public void putRequiredCheck(IResolvable|java.util.List<OrganizationRulesetRulesRequiredStatusChecksRequiredCheck> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>>

---

##### `resetDoNotEnforceOnCreate` <a name="resetDoNotEnforceOnCreate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resetDoNotEnforceOnCreate"></a>

```java
public void resetDoNotEnforceOnCreate()
```

##### `resetStrictRequiredStatusChecksPolicy` <a name="resetStrictRequiredStatusChecksPolicy" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resetStrictRequiredStatusChecksPolicy"></a>

```java
public void resetStrictRequiredStatusChecksPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheck">requiredCheck</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList">OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.doNotEnforceOnCreateInput">doNotEnforceOnCreateInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheckInput">requiredCheckInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicyInput">strictRequiredStatusChecksPolicyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.doNotEnforceOnCreate">doNotEnforceOnCreate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicy">strictRequiredStatusChecksPolicy</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requiredCheck`<sup>Required</sup> <a name="requiredCheck" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheck"></a>

```java
public OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList getRequiredCheck();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList">OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList</a>

---

##### `doNotEnforceOnCreateInput`<sup>Optional</sup> <a name="doNotEnforceOnCreateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.doNotEnforceOnCreateInput"></a>

```java
public java.lang.Boolean|IResolvable getDoNotEnforceOnCreateInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requiredCheckInput`<sup>Optional</sup> <a name="requiredCheckInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheckInput"></a>

```java
public IResolvable|java.util.List<OrganizationRulesetRulesRequiredStatusChecksRequiredCheck> getRequiredCheckInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>>

---

##### `strictRequiredStatusChecksPolicyInput`<sup>Optional</sup> <a name="strictRequiredStatusChecksPolicyInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicyInput"></a>

```java
public java.lang.Boolean|IResolvable getStrictRequiredStatusChecksPolicyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `doNotEnforceOnCreate`<sup>Required</sup> <a name="doNotEnforceOnCreate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.doNotEnforceOnCreate"></a>

```java
public java.lang.Boolean|IResolvable getDoNotEnforceOnCreate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `strictRequiredStatusChecksPolicy`<sup>Required</sup> <a name="strictRequiredStatusChecksPolicy" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicy"></a>

```java
public java.lang.Boolean|IResolvable getStrictRequiredStatusChecksPolicy();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.internalValue"></a>

```java
public OrganizationRulesetRulesRequiredStatusChecks getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a>

---


### OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList <a name="OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList;

new OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.get"></a>

```java
public OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OrganizationRulesetRulesRequiredStatusChecksRequiredCheck> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>>

---


### OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference <a name="OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference;

new OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resetIntegrationId">resetIntegrationId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntegrationId` <a name="resetIntegrationId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resetIntegrationId"></a>

```java
public void resetIntegrationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.contextInput">contextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationIdInput">integrationIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.context">context</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationId">integrationId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.contextInput"></a>

```java
public java.lang.String getContextInput();
```

- *Type:* java.lang.String

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationIdInput"></a>

```java
public java.lang.Number getIntegrationIdInput();
```

- *Type:* java.lang.Number

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationId"></a>

```java
public java.lang.Number getIntegrationId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.internalValue"></a>

```java
public IResolvable|OrganizationRulesetRulesRequiredStatusChecksRequiredCheck getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>

---


### OrganizationRulesetRulesRequiredWorkflowsOutputReference <a name="OrganizationRulesetRulesRequiredWorkflowsOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference;

new OrganizationRulesetRulesRequiredWorkflowsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.putRequiredWorkflow">putRequiredWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resetDoNotEnforceOnCreate">resetDoNotEnforceOnCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequiredWorkflow` <a name="putRequiredWorkflow" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.putRequiredWorkflow"></a>

```java
public void putRequiredWorkflow(IResolvable|java.util.List<OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.putRequiredWorkflow.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>>

---

##### `resetDoNotEnforceOnCreate` <a name="resetDoNotEnforceOnCreate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resetDoNotEnforceOnCreate"></a>

```java
public void resetDoNotEnforceOnCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.requiredWorkflow">requiredWorkflow</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.doNotEnforceOnCreateInput">doNotEnforceOnCreateInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.requiredWorkflowInput">requiredWorkflowInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.doNotEnforceOnCreate">doNotEnforceOnCreate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requiredWorkflow`<sup>Required</sup> <a name="requiredWorkflow" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.requiredWorkflow"></a>

```java
public OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList getRequiredWorkflow();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList</a>

---

##### `doNotEnforceOnCreateInput`<sup>Optional</sup> <a name="doNotEnforceOnCreateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.doNotEnforceOnCreateInput"></a>

```java
public java.lang.Boolean|IResolvable getDoNotEnforceOnCreateInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requiredWorkflowInput`<sup>Optional</sup> <a name="requiredWorkflowInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.requiredWorkflowInput"></a>

```java
public IResolvable|java.util.List<OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow> getRequiredWorkflowInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>>

---

##### `doNotEnforceOnCreate`<sup>Required</sup> <a name="doNotEnforceOnCreate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.doNotEnforceOnCreate"></a>

```java
public java.lang.Boolean|IResolvable getDoNotEnforceOnCreate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.internalValue"></a>

```java
public OrganizationRulesetRulesRequiredWorkflows getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a>

---


### OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList <a name="OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList;

new OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.get"></a>

```java
public OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>>

---


### OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference <a name="OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference;

new OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resetRef">resetRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRef` <a name="resetRef" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resetRef"></a>

```java
public void resetRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.refInput">refInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.repositoryId">repositoryId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.refInput"></a>

```java
public java.lang.String getRefInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.repositoryIdInput"></a>

```java
public java.lang.Number getRepositoryIdInput();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.repositoryId"></a>

```java
public java.lang.Number getRepositoryId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.internalValue"></a>

```java
public IResolvable|OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>

---


### OrganizationRulesetRulesTagNamePatternOutputReference <a name="OrganizationRulesetRulesTagNamePatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_ruleset.OrganizationRulesetRulesTagNamePatternOutputReference;

new OrganizationRulesetRulesTagNamePatternOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resetNegate">resetNegate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resetNegate"></a>

```java
public void resetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.negateInput">negateInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.negate">negate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.negateInput"></a>

```java
public java.lang.Boolean|IResolvable getNegateInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.internalValue"></a>

```java
public OrganizationRulesetRulesTagNamePattern getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a>

---



